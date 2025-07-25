import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Dados mockados para demonstração
const articles = {
  "desenvolvimento-economico-oeste-goiano": {
    id: 1,
    title: "Desenvolvimento Econômico Impulsiona Crescimento no Oeste Goiano",
    subtitle: "Novos investimentos em infraestrutura e agronegócio prometem transformar a região",
    content: `
      <p>O Oeste Goiano vive um momento de transformação econômica sem precedentes. Com investimentos que ultrapassam os R$ 2 bilhões nos últimos dois anos, a região se consolida como um dos principais polos de desenvolvimento do estado de Goiás.</p>

      <p>Os números impressionam: mais de 15 mil empregos diretos foram criados apenas no último ano, impulsionados principalmente pelos setores do agronegócio, logística e energia renovável. "Estamos vivenciando uma revolução econômica que beneficia toda a população regional", afirma o secretário de Desenvolvimento Econômico.</p>

      <h3>Infraestrutura como Base do Crescimento</h3>

      <p>A modernização da infraestrutura tem sido fundamental para atrair novos investimentos. A conclusão da duplicação da BR-060 e a construção de três novos terminais logísticos criaram condições ideais para o escoamento da produção agrícola.</p>

      <p>Além disso, o investimento em energia renovável, com a instalação de cinco parques solares na região, posiciona o Oeste Goiano na vanguarda da sustentabilidade energética nacional.</p>

      <h3>Agronegócio em Expansão</h3>

      <p>O setor que mais cresce é o agronegócio, responsável por 60% dos novos investimentos. A região se tornou referência nacional na produção de soja, milho e algodão, com produtividade acima da média nacional.</p>

      <p>Cooperativas locais investiram pesadamente em tecnologia e inovação, implementando sistemas de agricultura de precisão que aumentaram a produtividade em 25% nos últimos três anos.</p>

      <h3>Perspectivas para o Futuro</h3>

      <p>As perspectivas para os próximos anos são ainda mais promissoras. Está prevista a chegada de uma montadora de veículos elétricos, que deve gerar mais 8 mil empregos diretos e indiretos.</p>

      <p>O projeto de expansão do aeroporto regional também promete impulsionar o turismo de negócios e facilitar o acesso de investidores nacionais e internacionais à região.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    category: "Economia",
    publishedAt: "2024-01-15",
    author: "Maria Silva",
    readTime: "5 min",
  },
  "nova-lei-incentivo-cultura": {
    id: 2,
    title: "Nova Lei de Incentivo à Cultura é Aprovada",
    subtitle: "Medida visa fortalecer o setor cultural da região com recursos e benefícios fiscais",
    content: `
      <p>A Assembleia Legislativa de Goiás aprovou por unanimidade a nova Lei de Incentivo à Cultura do Oeste Goiano, que destinará R$ 50 milhões anuais para projetos culturais na região.</p>

      <p>A legislação, que entra em vigor no próximo mês, oferece benefícios fiscais para empresas que investirem em projetos culturais, além de criar um fundo específico para apoiar artistas e produtores locais.</p>

      <h3>Benefícios da Nova Legislação</h3>

      <p>Entre os principais benefícios estão a dedução de até 6% do imposto devido para empresas patrocinadoras e a criação de editais específicos para diferentes segmentos artísticos.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    category: "Cultura",
    publishedAt: "2024-01-14",
    author: "João Santos",
    readTime: "3 min",
  },
}

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const article = articles[params.slug as keyof typeof articles]

  if (!article) {
    return {
      title: "Artigo não encontrado - Tribuna do Oeste Goiano",
    }
  }

  return {
    title: `${article.title} - Tribuna do Oeste Goiano`,
    description: article.subtitle,
    openGraph: {
      title: article.title,
      description: article.subtitle,
      images: [article.image],
    },
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles[params.slug as keyof typeof articles]

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
            <p className="text-xl text-cinza-carvao leading-relaxed max-w-3xl mx-auto">{article.subtitle}</p>
            <div className="flex items-center justify-center space-x-6 text-sm text-cinza-carvao">
              <span>Por {article.author}</span>
              <span>•</span>
              <time>{new Date(article.publishedAt).toLocaleDateString("pt-BR")}</time>
              <span>•</span>
              <span>{article.readTime} de leitura</span>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
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
