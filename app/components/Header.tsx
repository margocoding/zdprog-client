'use client'

import { useState } from 'react'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navItems = ['Решения', 'Как работаем', 'Цены', 'Кейсы', 'О компании']

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16 lg:h-18">
        <a href="#" className="text-lg sm:text-xl font-bold tracking-tight" style={{ color: '#0F2D4A' }}>
          ЖД-ПРОГ
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item} href={`#${item}`} className="text-sm font-medium text-gray-600 hover:text-[#0F2D4A] transition-colors">
              {item}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a href="#audit" className="inline-flex items-center px-5 py-2.5 bg-[#2563EB] text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            Обсудить проект
          </a>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2" aria-label="Меню">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <a key={item} href={`#${item}`} onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-gray-600 hover:text-[#0F2D4A] py-2">
              {item}
            </a>
          ))}
          <a href="#audit" onClick={() => setMobileOpen(false)} className="block w-full text-center px-5 py-2.5 bg-[#2563EB] text-white text-sm font-semibold rounded-lg mt-3">
            Обсудить проект
          </a>
        </div>
      )}
    </header>
  )
}
