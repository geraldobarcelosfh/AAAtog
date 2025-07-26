"use client"

import React, { useState } from "react"
import Link from "next/link"

const navigation = [
  { name: "Política", href: "/categoria/politica" },
  { name: "Economia", href: "/categoria/economia" },
  { name: "Cultura", href: "/categoria/cultura" },
  { name: "Região", href: "/categoria/regiao" },
  { name: "Opinião", href: "/categoria/opiniao" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-8">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-3xl lg:text-4xl font-serif font-bold text-preto-fosco hover:text-dourado-queimado transition-colors duration-200"
            >
              Tribuna do Oeste Goiano
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-cinza-carvao hover:text-dourado-queimado font-medium transition-colors duration-200 text-lg"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-cinza-carvao hover:text-dourado-queimado focus:outline-none focus:text-dourado-queimado transition-colors duration-200"
              aria-label="Menu principal"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-cinza-carvao hover:text-dourado-queimado font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
