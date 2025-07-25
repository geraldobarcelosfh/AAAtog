import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getArticle } from "@/services/strapi"

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const article = await getArticle(params.slug)

  if (!article) {
    return {
      title: "Artigo não encontrado - Tribuna do Oeste Goiano",
    }
  }

  return {
    title: `${article.title} - Tribuna do Oeste Goiano`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image.url],
    },
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticle(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <article className="bg-white">
      {/* Article Header */}
      <header className="relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-6">
            <div>
              <span className="inline-block px-3 py-1 text-sm font-medium text-dourado-queimado bg-dourado-queimado bg-opacity-10 rounded-full mb-4">
                {article.category}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-preto-fosco leading-tight">
              {article.title}
            </h1>
            <p className="text-xl text-cinza-carvao leading-relaxed max-w-3xl mx-auto">{article.excerpt}</p>
            <div className="flex items-center justify-center space-x-6 text-sm text-cinza-carvao">
              <span>Por {article.author}</span>
              <span>•</span>
              <time>{new Date(article.publishedAt).toLocaleDateString("pt-BR")}</time>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Image
          src={article.image.url}
          alt={article.image.alt}
          width={1200}
          height={600}
          className="w-full h-96 lg:h-[500px] object-cover"
          priority
        />
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="prose prose-lg max-w-none">
          <div
            className="text-cinza-carvao leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        {/* Article Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-cinza-carvao">
              <p>Publicado em {new Date(article.publishedAt).toLocaleDateString("pt-BR")}</p>
              <p className="font-medium">Por {article.author}</p>
            </div>
            <Link href="/" className="btn-secondary">
              ← Voltar ao Início
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
