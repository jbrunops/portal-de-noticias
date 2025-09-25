'use client'

import { Menu, Search, User } from 'lucide-react'
import { useState } from 'react'

interface NavigationItem {
  label: string
  href: string
  isLive?: boolean
}

const navigationItems: NavigationItem[] = [
  { label: 'Ao vivo', href: '/ao-vivo', isLive: true },
  { label: 'Política', href: '/politica' },
  { label: 'WW', href: '/ww' },
  { label: 'Money', href: '/money' },
  { label: 'Esportes', href: '/esportes' },
  { label: 'Pop', href: '/pop' },
  { label: 'Viagem & Gastronomia', href: '/viagem-gastronomia' },
  { label: 'COP30', href: '/cop30' },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-cnn-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Menu hamburger e logo */}
          <div className="flex items-center">
            {/* Menu hamburger - apenas mobile */}
            <button
              className="lg:hidden p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Logo Portal Cachoeirinha */}
            <a href="/" className="bg-cnn-red px-4 py-2 ml-2 lg:ml-0 block hover:bg-red-700 transition-colors">
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">PORTAL</span>
                <span className="text-xs font-normal tracking-wide text-white">CACHOEIRINHA</span>
              </div>
            </a>
          </div>

          {/* Navegação desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-white hover:text-gray-300 transition-colors duration-200 ${
                  item.isLive ? 'live-indicator' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Ícones direita */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-white hover:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <Search className="h-5 w-5" />
            </button>
            <div className="h-6 w-px bg-gray-600"></div>
            <button className="p-2 text-white hover:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-cnn-gray">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 text-white hover:bg-gray-700 rounded-md ${
                    item.isLive ? 'live-indicator' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
