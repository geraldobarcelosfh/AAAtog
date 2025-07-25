import Link from "next/link"
import Image from "next/image"
import { getArticlesByCategory, type Article } from "@/services/strapi"

export const revalidate = 3600

const categorias = {
  politica: "Política",
  economia: "Economia",
  cultura: "Cultura",
  regiao: "Região",
  opiniao: "Opinião",
}

interface CategoryPageProps {
  params: {
    categoria: string
  }
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const categoryName = categorias[params.categoria as keyof typeof categorias]

  return {
    title: `${categoryName} - Tribuna do Oeste Goiano`,
    description: `Notícias de ${categoryName} do Oeste Goiano`,
    openGraph: {
      title: `${categoryName} - Tribuna do Oeste Goiano`,
      description: `Notícias de ${categoryName} do Oeste Goiano`,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/categoria/${params.categoria}`,
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/categoria/${params.categoria}`,
    },
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = categorias[params.categoria as keyof typeof categorias]
  let articles: Article[] = []
  let fetchError = false
  if (categoryName) {
    try {
      articles = await getArticlesByCategory(categoryName)
    } catch (e) {
      console.error(e)
      fetchError = true
    }
  }

  if (!categoryName || fetchError) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-3xl font-serif font-bold text-preto-fosco mb-4">Categoria não encontrada</h1>
        <Link href="/" className="btn-primary">
          Voltar ao Início
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-preto-fosco mb-4">{categoryName}</h1>
          <div className="w-24 h-1 bg-dourado-queimado mx-auto"></div>
        </div>

        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white border border-gray-200 overflow-hidden group hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-serif font-bold text-preto-fosco mb-3 group-hover:text-dourado-queimado transition-colors duration-200">
                    <Link href={`/artigo/${article.slug}`}>{article.title}</Link>
                  </h2>
                  <p className="text-cinza-carvao text-sm leading-relaxed mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <time className="text-xs text-cinza-carvao">
                      {new Date(article.publishedAt).toLocaleDateString("pt-BR")}
                    </time>
                    <Link
                      href={`/artigo/${article.slug}`}
                      className="text-dourado-queimado hover:text-cinza-carvao text-sm font-medium transition-colors duration-200"
                    >
                      Ler mais →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-cinza-carvao text-lg mb-8">
              Em breve, novos conteúdos sobre {categoryName.toLowerCase()}.
            </p>
            <Link href="/" className="btn-primary">
              Voltar ao Início
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
