import { createClient } from "@sanity/client"
import groq from "groq"

const projectId = process.env.SANITY_PROJECT_ID!
const dataset = process.env.SANITY_DATASET!
const apiVersion = "2024-07-01"
const token = process.env.SANITY_API_TOKEN

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token,
})

export interface Post {
  _id: string
  title: string
  excerpt: string
  slug: string
  publishedAt: string
  mainImage?: { asset: { url: string } }
  category?: string
  author?: {
    name: string
    image?: { asset: { url: string } }
  }
  body: any
}

const postFields = `
  _id,
  title,
  excerpt,
  "slug": slug.current,
  publishedAt,
  mainImage{asset->{url}},
  category,
  author->{name, image{asset->{url}}},
  body
`

export async function getPosts(): Promise<Post[]> {
  return client.fetch(groq`*[_type == "post"] | order(publishedAt desc){${postFields}}`)
}

export async function getPost(slug: string): Promise<Post | null> {
  const data = await client.fetch(groq`*[_type == "post" && slug.current == $slug][0]{${postFields}}`, { slug })
  return data || null
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  return client.fetch(groq`*[_type == "post" && category == $category] | order(publishedAt desc){${postFields}}`, { category })
}
