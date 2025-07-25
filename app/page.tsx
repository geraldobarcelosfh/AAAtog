import Link from "next/link"
import Image from "next/image"
import { getArticles } from "@/services/strapi"

export default async function HomePage() {
  const articles = await getArticles()

  if (!articles || articles.length === 0) {
    return (
      <div className="bg-white text-center py-16">
        <h1 className="text-2xl font-bold">Nenhum artigo encontrado.</h1>
        <p>Por favor, verifique a conexão com o CMS ou adicione novos artigos.</p>
      </div>
    )
  }

  const featuredArticle = articles[0]
  const secondaryArticles = articles.slice(1, 3)
  const politicsArticles = articles.filter((a) => a.category === "Política").slice(0, 4)
  const economyArticles = articles.filter((a) => a.category === "Economia").slice(0, 4)
  const cultureArticles = articles.filter((a) => a.category === "Cultura").slice(0, 4)
  const regionArticles = articles.filter((a) => a.category === "Região").slice(0, 4)

  return (
    <div className="bg-white">
      {/* Grid de Destaque Principal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[600px]">
          {/* Bloco Principal - Esquerda */}
          <div className="lg:col-span-2 relative overflow-hidden group cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: `url('${featuredArticle.image.url}')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

            {/* Badge de Categoria */}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center px-3 py-1 text-xs font-bold text-white bg-dourado-queimado uppercase tracking-wide">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                {featuredArticle.category}
              </span>
            </div>

            {/* Conteúdo Principal */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="mb-4">
                <div className="flex items-center space-x-4 text-white/80 text-sm mb-2">
                  <span className="font-bold">{featuredArticle.category}</span>
                  <span>•</span>
                  <span>{new Date(featuredArticle.publishedAt).toLocaleDateString("pt-BR")}</span>
                </div>
              </div>

              <h1 className="text-3xl lg:text-4xl font-serif font-bold text-white leading-tight mb-4 group-hover:text-dourado-queimado transition-colors duration-300">
                {featuredArticle.title}
              </h1>

              <p className="text-white/90 text-lg leading-relaxed mb-4 max-w-2xl">{featuredArticle.excerpt}</p>

              <Link
                href={`/artigo/${featuredArticle.slug}`}
                className="inline-flex items-center text-dourado-queimado hover:text-white font-semibold transition-colors duration-200"
              >
                Leia mais →
              </Link>
            </div>
          </div>

          {/* Blocos Menores - Direita */}
          <div className="flex flex-col gap-4">
            {secondaryArticles.map((article) => (
              <div key={article.id} className="relative overflow-hidden group cursor-pointer flex-1">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${article.image.url}')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                <div className="absolute top-3 left-3">
                  <span className="inline-block px-2 py-1 text-xs font-bold text-white bg-dourado-queimado uppercase">
                    {article.category}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h2 className="text-xl font-serif font-bold text-white leading-tight mb-2 group-hover:text-dourado-queimado transition-colors duration-300">
                    {article.title}
                  </h2>
                  <p className="text-white/80 text-sm leading-relaxed">{article.excerpt}</p>
                  <Link
                    href={`/artigo/${article.slug}`}
                    className="inline-flex items-center text-dourado-queimado hover:text-white text-sm font-medium mt-2 transition-colors duration-200"
                  >
                    Leia mais →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Notícias por Categorias */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Política */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="bg-red-600 text-white px-4 py-2 font-serif font-bold text-lg uppercase tracking-wide">
                Política
              </div>
              <div className="flex-1 h-px bg-red-600 ml-4"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {politicsArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={article.image.url}
                      alt={article.image.alt}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="bg-red-600 text-white text-xs px-2 py-1 font-bold uppercase">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif font-bold text-sm text-preto-fosco leading-tight mb-2 line-clamp-2 group-hover:text-dourado-queimado transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-cinza-carvao mb-3">
                      <time>{new Date(article.publishedAt).toLocaleDateString("pt-BR")}</time>
                    </div>
                    <Link
                      href={`/artigo/${article.slug}`}
                      className="text-dourado-queimado hover:text-cinza-carvao text-xs font-medium transition-colors"
                    >
                      Leia mais →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Economia */}
          <div className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex items-center mb-8">
              <div className="bg-dourado-queimado text-white px-4 py-2 font-serif font-bold text-lg uppercase tracking-wide">
                Economia
              </div>
              <div className="flex-1 h-px bg-dourado-queimado ml-4"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {economyArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={article.image.url}
                      alt={article.image.alt}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="bg-dourado-queimado text-white text-xs px-2 py-1 font-bold uppercase">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif font-bold text-sm text-preto-fosco leading-tight mb-2 line-clamp-2 group-hover:text-dourado-queimado transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-cinza-carvao mb-3">
                      <time>{new Date(article.publishedAt).toLocaleDateString("pt-BR")}</time>
                    </div>
                    <Link
                      href={`/artigo/${article.slug}`}
                      className="text-dourado-queimado hover:text-cinza-carvao text-xs font-medium transition-colors"
                    >
                      Leia mais →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Cultura */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="bg-purple-600 text-white px-4 py-2 font-serif font-bold text-lg uppercase tracking-wide">
                Cultura
              </div>
              <div className="flex-1 h-px bg-purple-600 ml-4"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cultureArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={article.image.url}
                      alt={article.image.alt}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="bg-purple-600 text-white text-xs px-2 py-1 font-bold uppercase">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif font-bold text-sm text-preto-fosco leading-tight mb-2 line-clamp-2 group-hover:text-dourado-queimado transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-cinza-carvao mb-3">
                      <time>{new Date(article.publishedAt).toLocaleDateString("pt-BR")}</time>
                    </div>
                    <Link
                      href={`/artigo/${article.slug}`}
                      className="text-dourado-queimado hover:text-cinza-carvao text-xs font-medium transition-colors"
                    >
                      Leia mais →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Região */}
          <div className="mb-16 bg-green-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex items-center mb-8">
              <div className="bg-green-600 text-white px-4 py-2 font-serif font-bold text-lg uppercase tracking-wide">
                Região
              </div>
              <div className="flex-1 h-px bg-green-600 ml-4"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {regionArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={article.image.url}
                      alt={article.image.alt}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="bg-green-600 text-white text-xs px-2 py-1 font-bold uppercase">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif font-bold text-sm text-preto-fosco leading-tight mb-2 line-clamp-2 group-hover:text-dourado-queimado transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-cinza-carvao mb-3">
                      <time>{new Date(article.publishedAt).toLocaleDateString("pt-BR")}</time>
                    </div>
                    <Link
                      href={`/artigo/${article.slug}`}
                      className="text-dourado-queimado hover:text-cinza-carvao text-xs font-medium transition-colors"
                    >
                      Leia mais →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
