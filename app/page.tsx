import Link from "next/link"
import Image from "next/image"

// Dados mockados para demonstração
const featuredArticle = {
  id: 1,
  title: "Desenvolvimento Econômico Impulsiona Crescimento no Oeste Goiano",
  excerpt:
    "Novos investimentos em infraestrutura e agronegócio prometem transformar a região em um dos principais polos de desenvolvimento do estado.",
  image: "/placeholder.svg?height=600&width=1200",
  category: "Economia",
  publishedAt: "2024-01-15",
  slug: "desenvolvimento-economico-oeste-goiano",
}

const articles = [
  {
    id: 2,
    title: "Nova Lei de Incentivo à Cultura é Aprovada",
    excerpt: "Medida visa fortalecer o setor cultural da região com recursos e benefícios fiscais.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Cultura",
    publishedAt: "2024-01-14",
    slug: "nova-lei-incentivo-cultura",
  },
  {
    id: 3,
    title: "Eleições Municipais: Candidatos Apresentam Propostas",
    excerpt: "Principais candidatos debatem soluções para os desafios urbanos e rurais da região.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Política",
    publishedAt: "2024-01-13",
    slug: "eleicoes-municipais-candidatos-propostas",
  },
  {
    id: 4,
    title: "Festival de Inverno Movimenta Turismo Regional",
    excerpt: "Evento cultural atrai milhares de visitantes e aquece a economia local.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Cultura",
    publishedAt: "2024-01-12",
    slug: "festival-inverno-turismo-regional",
  },
  {
    id: 5,
    title: "Investimentos em Infraestrutura Rural",
    excerpt: "Governo anuncia melhorias em estradas e sistemas de irrigação para produtores.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Região",
    publishedAt: "2024-01-11",
    slug: "investimentos-infraestrutura-rural",
  },
  {
    id: 6,
    title: "Educação: Novas Escolas Técnicas na Região",
    excerpt: "Expansão do ensino técnico promete qualificar mão de obra local.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Região",
    publishedAt: "2024-01-10",
    slug: "novas-escolas-tecnicas-regiao",
  },
]

export default function HomePage() {
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
                backgroundImage: `url('/placeholder.svg?height=600&width=800')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

            {/* Badge de Categoria */}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center px-3 py-1 text-xs font-bold text-white bg-dourado-queimado uppercase tracking-wide">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                SIGA EM TEMPO REAL
              </span>
            </div>

            {/* Conteúdo Principal */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="mb-4">
                <div className="flex items-center space-x-4 text-white/80 text-sm mb-2">
                  <span className="font-bold">POLÍTICA</span>
                  <span>•</span>
                  <span>15 min</span>
                </div>
              </div>

              <h1 className="text-3xl lg:text-4xl font-serif font-bold text-white leading-tight mb-4 group-hover:text-dourado-queimado transition-colors duration-300">
                GOVERNADOR ANUNCIA PACOTE DE INVESTIMENTOS PARA OESTE GOIANO; ACOMPANHE AO VIVO
              </h1>

              <p className="text-white/90 text-lg leading-relaxed mb-4 max-w-2xl">
                Ronaldo Caiado apresenta plano de R$ 500 milhões para infraestrutura regional. Decisões sobre novas
                rodovias serão anunciadas na coletiva.
              </p>

              <Link
                href="/artigo/governador-investimentos-oeste-goiano"
                className="inline-flex items-center text-dourado-queimado hover:text-white font-semibold transition-colors duration-200"
              >
                Acompanhar ao vivo →
              </Link>
            </div>
          </div>

          {/* Blocos Menores - Direita */}
          <div className="flex flex-col gap-4">
            {/* Bloco Superior Direito */}
            <div className="relative overflow-hidden group cursor-pointer flex-1">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url('/placeholder.svg?height=300&width=400')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              <div className="absolute top-3 left-3">
                <span className="inline-block px-2 py-1 text-xs font-bold text-white bg-dourado-queimado uppercase">
                  ECONOMIA
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h2 className="text-xl font-serif font-bold text-white leading-tight mb-2 group-hover:text-dourado-queimado transition-colors duration-300">
                  SAFRA RECORDE IMPULSIONA PIB REGIONAL
                </h2>
                <p className="text-white/80 text-sm leading-relaxed">
                  Produção de soja supera expectativas e coloca região entre as mais prósperas do estado.
                </p>
                <Link
                  href="/artigo/safra-recorde-pib-regional"
                  className="inline-flex items-center text-dourado-queimado hover:text-white text-sm font-medium mt-2 transition-colors duration-200"
                >
                  Leia mais →
                </Link>
              </div>
            </div>

            {/* Bloco Inferior Direito */}
            <div className="relative overflow-hidden group cursor-pointer flex-1">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url('/placeholder.svg?height=300&width=400')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              <div className="absolute top-3 left-3">
                <span className="inline-block px-2 py-1 text-xs font-bold text-white bg-cinza-carvao uppercase">
                  BASTIDORES
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h2 className="text-xl font-serif font-bold text-white leading-tight mb-2 group-hover:text-dourado-queimado transition-colors duration-300">
                  PREFEITO ARTICULA ALIANÇA PARA 2026
                </h2>
                <p className="text-white/80 text-sm leading-relaxed">
                  Bastidores revelam conversas para formação de chapa única nas próximas eleições estaduais.
                </p>
                <Link
                  href="/artigo/prefeito-alianca-2026"
                  className="inline-flex items-center text-dourado-queimado hover:text-white text-sm font-medium mt-2 transition-colors duration-200"
                >
                  Saiba mais →
                </Link>
              </div>
            </div>
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
              <article className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Eleições municipais"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-red-600 text-white text-xs px-2 py-1 font-bold uppercase">Política</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif font-bold text-sm text-preto-fosco leading-tight mb-2 line-clamp-2 group-hover:text-dourado-queimado transition-colors">
                    Candidatos apresentam propostas para desenvolvimento urbano
                  </h3>
                  <div className="flex items-center justify-between text-xs text-cinza-carvao mb-3">
                    <time>15 jan, 14:30</time>
                  </div>
                  <Link
                    href="/artigo/candidatos-propostas-urbano"
                    className="text-dourado-queimado hover:text-cinza-carvao text-xs font-medium transition-colors"
                  >
                    Leia mais →
                  </Link>
                </div>
              </article>

              <article className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Assembleia legislativa"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-red-600 text-white text-xs px-2 py-1 font-bold uppercase">Política</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif font-bold text-sm text-preto-fosco leading-tight mb-2 line-clamp-2 group-hover:text-dourado-queimado transition-colors">
                    Assembleia aprova projeto de lei para pequenos produtores
                  </h3>
                  <div className="flex items-center justify-between text-xs text-cinza-carvao mb-3">
                    <time>15 jan, 12:15</time>
                  </div>
                  <Link
                    href="/artigo/assembleia-pequenos-produtores"
                    className="text-dourado-queimado hover:text-cinza-carvao text-xs font-medium transition-colors"
                  >
                    Leia mais →
                  </Link>
                </div>
              </article>

              <article className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Prefeitura regional"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-red-600 text-white text-xs px-2 py-1 font-bold uppercase">Política</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif font-bold text-sm text-preto-fosco leading-tight mb-2 line-clamp-2 group-hover:text-dourado-queimado transition-colors">
                    Prefeitos da região se reúnem para discutir consórcio
                  </h3>
                  <div className="flex items-center justify-between text-xs text-cinza-carvao mb-3">
                    <time>14 jan, 16:45</time>
                  </div>
                  <Link
                    href="/artigo/prefeitos-consorcio"
                    className="text-dourado-queimado hover:text-cinza-carvao text-xs font-medium transition-colors"
                  >
                    Leia mais →
                  </Link>
                </div>
              </article>

              <article className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Câmara municipal"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-red-600 text-white text-xs px-2 py-1 font-bold uppercase">Política</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif font-bold text-sm text-preto-fosco leading-tight mb-2 line-clamp-2 group-hover:text-dourado-queimado transition-colors">
                    Câmara debate orçamento municipal para 2024
                  </h3>
                  <div className="flex items-center justify-between text-xs text-cinza-carvao mb-3">
                    <time>14 jan, 09:20</time>
                  </div>
                  <Link
                    href="/artigo/camara-orcamento-2024"
                    className="text-dourado-queimado hover:text-cinza-carvao text-xs font-medium transition-colors"
                  >
                    Leia mais →
                  </Link>
                </div>
              </article>
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
              <article className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Agronegócio"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-dourado-queimado text-white text-xs px-2 py-1 font-bold uppercase">
                      Economia
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif font-bold text-sm text-preto-fosco leading-tight mb-2 line-clamp-2 group-hover:text-dourado-queimado transition-colors">
                    Safra de soja bate recorde histórico na região
                  </h3>
                  <div className="flex items-center justify-between text-xs text-cinza-carvao mb-3">
                    <time>15 jan, 11:00</time>
                  </div>
                  <Link
                    href="/artigo/safra-soja-recorde"
                    className="text-dourado-queimado hover:text-cinza-carvao text-xs font-medium transition-colors"
                  >
                    Leia mais →
                  </Link>
                </div>
              </article>

              <article className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Indústria"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-dourado-queimado text-white text-xs px-2 py-1 font-bold uppercase">
                      Economia
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif font-bold text-sm text-preto-fosco leading-tight mb-2 line-clamp-2 group-hover:text-dourado-queimado transition-colors">
                    Nova indústria gera 500 empregos diretos
                  </h3>
                  <div className="flex items-center justify-between text-xs text-cinza-carvao mb-3">
                    <time>14 jan, 15:30</time>
                  </div>
                  <Link
                    href="/artigo/industria-500-empregos"
                    className="text-dourado-queimado hover:text-cinza-carvao text-xs font-medium transition-colors"
                  >
                    Leia mais →
                  </Link>
                </div>
              </article>

              <article className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Cooperativas"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-dourado-queimado text-white text-xs px-2 py-1 font-bold uppercase">
                      Economia
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif font-bold text-sm text-preto-fosco leading-tight mb-2 line-clamp-2 group-hover:text-dourado-queimado transition-colors">
                    Cooperativas investem R$ 100 mi em tecnologia
                  </h3>
                  <div className="flex items-center justify-between text-xs text-cinza-carvao mb-3">
                    <time>13 jan, 13:45</time>
                  </div>
                  <Link
                    href="/artigo/cooperativas-tecnologia"
                    className="text-dourado-queimado hover:text-cinza-carvao text-xs font-medium transition-colors"
                  >
                    Leia mais →
                  </Link>
                </div>
              </article>

              <article className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Exportações"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-dourado-queimado text-white text-xs px-2 py-1 font-bold uppercase">
                      Economia
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif font-bold text-sm text-preto-fosco leading-tight mb-2 line-clamp-2 group-hover:text-dourado-queimado transition-colors">
                    Exportações crescem 25% no primeiro trimestre
                  </h3>
                  <div className="flex items-center justify-between text-xs text-cinza-carvao mb-3">
                    <time>12 jan, 10:15</time>
                  </div>
                  <Link
                    href="/artigo/exportacoes-crescimento"
                    className="text-dourado-queimado hover:text-cinza-carvao text-xs font-medium transition-colors"
                  >
                    Leia mais →
                  </Link>
                </div>
              </article>
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
              <article className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Festival cultural"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-purple-600 text-white text-xs px-2 py-1 font-bold uppercase">Cultura</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif font-bold text-sm text-preto-fosco leading-tight mb-2 line-clamp-2 group-hover:text-dourado-queimado transition-colors">
                    Festival de Inverno atrai 50 mil visitantes
                  </h3>
                  <div className="flex items-center justify-between text-xs text-cinza-carvao mb-3">
                    <time>15 jan, 08:30</time>
                  </div>
                  <Link
                    href="/artigo/festival-inverno-visitantes"
                    className="text-dourado-queimado hover:text-cinza-carvao text-xs font-medium transition-colors"
                  >
                    Leia mais →
                  </Link>
                </div>
              </article>

              <article className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Teatro regional"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-purple-600 text-white text-xs px-2 py-1 font-bold uppercase">Cultura</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif font-bold text-sm text-preto-fosco leading-tight mb-2 line-clamp-2 group-hover:text-dourado-queimado transition-colors">
                    Teatro Municipal recebe reforma completa
                  </h3>
                  <div className="flex items-center justify-between text-xs text-cinza-carvao mb-3">
                    <time>14 jan, 17:20</time>
                  </div>
                  <Link
                    href="/artigo/teatro-reforma"
                    className="text-dourado-queimado hover:text-cinza-carvao text-xs font-medium transition-colors"
                  >
                    Leia mais →
                  </Link>
                </div>
              </article>

              <article className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Artistas locais"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-purple-600 text-white text-xs px-2 py-1 font-bold uppercase">Cultura</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif font-bold text-sm text-preto-fosco leading-tight mb-2 line-clamp-2 group-hover:text-dourado-queimado transition-colors">
                    Artistas locais ganham espaço nacional
                  </h3>
                  <div className="flex items-center justify-between text-xs text-cinza-carvao mb-3">
                    <time>13 jan, 19:00</time>
                  </div>
                  <Link
                    href="/artigo/artistas-espaco-nacional"
                    className="text-dourado-queimado hover:text-cinza-carvao text-xs font-medium transition-colors"
                  >
                    Leia mais →
                  </Link>
                </div>
              </article>
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
              <article className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Infraestrutura rural"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-green-600 text-white text-xs px-2 py-1 font-bold uppercase">Região</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif font-bold text-sm text-preto-fosco leading-tight mb-2 line-clamp-2 group-hover:text-dourado-queimado transition-colors">
                    Obras de pavimentação chegam ao interior
                  </h3>
                  <div className="flex items-center justify-between text-xs text-cinza-carvao mb-3">
                    <time>15 jan, 07:45</time>
                  </div>
                  <Link
                    href="/artigo/pavimentacao-interior"
                    className="text-dourado-queimado hover:text-cinza-carvao text-xs font-medium transition-colors"
                  >
                    Leia mais →
                  </Link>
                </div>
              </article>

              <article className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Educação técnica"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-green-600 text-white text-xs px-2 py-1 font-bold uppercase">Região</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif font-bold text-sm text-preto-fosco leading-tight mb-2 line-clamp-2 group-hover:text-dourado-queimado transition-colors">
                    Novas escolas técnicas ampliam vagas
                  </h3>
                  <div className="flex items-center justify-between text-xs text-cinza-carvao mb-3">
                    <time>14 jan, 14:10</time>
                  </div>
                  <Link
                    href="/artigo/escolas-tecnicas-vagas"
                    className="text-dourado-queimado hover:text-cinza-carvao text-xs font-medium transition-colors"
                  >
                    Leia mais →
                  </Link>
                </div>
              </article>

              <article className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Saúde pública"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-green-600 text-white text-xs px-2 py-1 font-bold uppercase">Região</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif font-bold text-sm text-preto-fosco leading-tight mb-2 line-clamp-2 group-hover:text-dourado-queimado transition-colors">
                    Hospital regional inaugura nova ala
                  </h3>
                  <div className="flex items-center justify-between text-xs text-cinza-carvao mb-3">
                    <time>13 jan, 16:30</time>
                  </div>
                  <Link
                    href="/artigo/hospital-nova-ala"
                    className="text-dourado-queimado hover:text-cinza-carvao text-xs font-medium transition-colors"
                  >
                    Leia mais →
                  </Link>
                </div>
              </article>

              <article className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Turismo rural"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-green-600 text-white text-xs px-2 py-1 font-bold uppercase">Região</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif font-bold text-sm text-preto-fosco leading-tight mb-2 line-clamp-2 group-hover:text-dourado-queimado transition-colors">
                    Turismo rural cresce 40% na região
                  </h3>
                  <div className="flex items-center justify-between text-xs text-cinza-carvao mb-3">
                    <time>12 jan, 12:00</time>
                  </div>
                  <Link
                    href="/artigo/turismo-rural-crescimento"
                    className="text-dourado-queimado hover:text-cinza-carvao text-xs font-medium transition-colors"
                  >
                    Leia mais →
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
