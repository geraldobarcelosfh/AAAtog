"use client"

import React from "react"
import { searchArticles, type Article } from "@/services/strapi"
import qs from "qs"

export function SearchInput() {
  const [term, setTerm] = React.useState("")
  const [results, setResults] = React.useState<Article[]>([])
  const [loading, setLoading] = React.useState(false)

  const fetchResults = React.useCallback(async (value: string) => {
    if (!value) {
      setResults([])
      return
    }
    setLoading(true)
    try {
      const data = await searchArticles(value)
      setResults(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  const debouncedFetch = React.useMemo(() => {
    return (value: string) => {
      const handler = setTimeout(() => fetchResults(value), 300)
      return () => clearTimeout(handler)
    }
  }, [fetchResults])

  React.useEffect(() => {
    const cancel = debouncedFetch(term)
    return cancel
  }, [term, debouncedFetch])

  return (
    <div className="space-y-4">
      <input
        aria-label="Buscar"
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="border p-2 w-full"
        placeholder="Digite para buscar"
      />
      {loading && <p>Carregando...</p>}
      <ul className="space-y-2">
        {results.map((article) => (
          <li key={article.id}>
            <a href={`/artigo/${article.slug}`} className="text-dourado-queimado underline">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
