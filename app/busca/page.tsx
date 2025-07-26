import { SearchInput } from "@/components/search-input"

export const metadata = {
  title: 'Buscar - Tribuna do Oeste Goiano'
}

export default function SearchPage() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Busca</h1>
      <SearchInput />
    </div>
  )
}
