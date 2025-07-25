import qs from "qs"

const STRAPI_URL = process.env.STRAPI_URL

interface Article {
  id: number
  attributes: {
    title: string
    excerpt: string
    content: string
    slug: string
    publishedAt: string
    image: {
      data: {
        attributes: {
          url: string
          alternativeText: string
        }
      }
    }
    category: {
      data: {
        attributes: {
          name: string
        }
      }
    }
    author: {
      data: {
        attributes: {
          name: string
        }
      }
    }
  }
}

function transformArticle(article: Article) {
  return {
    id: article.id,
    title: article.attributes.title,
    excerpt: article.attributes.excerpt,
    content: article.attributes.content,
    slug: article.attributes.slug,
    publishedAt: article.attributes.publishedAt,
    image: {
      url: `${STRAPI_URL}${article.attributes.image.data.attributes.url}`,
      alt: article.attributes.image.data.attributes.alternativeText,
    },
    category: article.attributes.category.data.attributes.name,
    author: article.attributes.author.data.attributes.name,
  }
}

export async function getArticles() {
  const query = qs.stringify(
    {
      populate: ["image", "category", "author"],
      sort: ["publishedAt:desc"],
    },
    {
      encodeValuesOnly: true,
    }
  )

  try {
    const res = await fetch(`${STRAPI_URL}/api/articles?${query}`)
    if (!res.ok) {
      console.error("Failed to fetch articles, returning empty array")
      return []
    }
    const { data } = await res.json()
    return data.map(transformArticle)
  } catch (error) {
    console.error("Error fetching articles:", error)
    return []
  }
}

export async function getArticle(slug: string) {
  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: ["image", "category", "author"],
    },
    {
      encodeValuesOnly: true,
    }
  )

  try {
    const res = await fetch(`${STRAPI_URL}/api/articles?${query}`)
    if (!res.ok) {
      console.error(`Failed to fetch article: ${slug}, returning null`)
      return null
    }
    const { data } = await res.json()
    if (data.length === 0) {
      return null
    }
    return transformArticle(data[0])
  } catch (error) {
    console.error(`Error fetching article ${slug}:`, error)
    return null
  }
}
