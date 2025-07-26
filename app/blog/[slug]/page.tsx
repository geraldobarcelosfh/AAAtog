import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PortableText } from "@portabletext/react"
import { getPost } from "@/services/sanity"

export const revalidate = 3600

interface PageProps {
  params: { slug: string }
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getPost(params.slug)
  if (!post) notFound()

  return (
    <article className="bg-white max-w-3xl mx-auto py-16">
      <h1 className="text-4xl font-serif font-bold mb-6">{post.title}</h1>
      {post.mainImage?.asset?.url && (
        <Image
          src={post.mainImage.asset.url}
          alt={post.title}
          width={800}
          height={400}
          className="w-full h-64 object-cover mb-6"
        />
      )}
      <div className="prose max-w-none">
        <PortableText value={post.body} />
      </div>
      <p className="mt-8 text-sm text-gray-500">Por {post.author?.name}</p>
      <Link href="/" className="btn-secondary mt-4 inline-block">
        ← Voltar ao Início
      </Link>
    </article>
  )
}
