import React from "react"
import type { Article } from "@/services/strapi"

export function useArticlesByCategory(articles: Article[]) {
  return React.useMemo(() => ({
    politics: articles.filter(a => a.category === "Política").slice(0, 4),
    economy: articles.filter(a => a.category === "Economia").slice(0, 4),
    culture: articles.filter(a => a.category === "Cultura").slice(0, 4),
    region: articles.filter(a => a.category === "Região").slice(0, 4),
  }), [articles])
}
