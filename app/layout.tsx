import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Crimson_Text } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Tribuna do Oeste Goiano - Notícias e Informação",
  description: "O principal jornal online do Oeste Goiano. Notícias sobre política, economia, cultura e região.",
  keywords: "notícias, Goiás, oeste goiano, política, economia, cultura",
  authors: [{ name: "Tribuna do Oeste Goiano" }],
  openGraph: {
    title: "Tribuna do Oeste Goiano",
    description: "O principal jornal online do Oeste Goiano",
    type: "website",
    locale: "pt_BR",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${playfairDisplay.variable} ${crimsonText.variable}`}>
      <body className="bg-white text-preto-fosco font-body antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <footer className="border-t border-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="font-serif text-2xl font-bold mb-4">Tribuna do Oeste Goiano</h3>
              <p className="text-cinza-carvao text-sm">© 2024 Tribuna do Oeste Goiano. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
