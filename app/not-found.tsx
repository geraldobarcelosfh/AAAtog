import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <h1 className="text-6xl font-serif font-bold text-preto-fosco mb-4">404</h1>
        <h2 className="text-2xl font-serif font-bold text-preto-fosco mb-4">Página não encontrada</h2>
        <p className="text-cinza-carvao mb-8">A página que você está procurando não existe ou foi movida.</p>
        <Link href="/" className="btn-primary">
          Voltar ao Início
        </Link>
      </div>
    </div>
  )
}
