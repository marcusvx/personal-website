import { useState } from 'react'
import { useLanguage } from '../i18n/useLanguage'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { lang, t, setLang } = useLanguage()

  const navItems = [
    { href: '#about', label: t.nav.about },
    { href: '#experience', label: t.nav.experience },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b-3 border-brutal-border bg-brutal-bg">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-xl font-titulos uppercase text-brutal-text transition-colors duration-200 hover:text-brutal-accent"
            >
              marcusvinicius.info
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden space-x-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-bold uppercase tracking-tight text-brutal-text transition-colors duration-200 hover:text-brutal-accent"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right side: Language Toggle + Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
              className="border-2 border-brutal-border px-3 py-1 text-xs font-bold uppercase tracking-tight text-brutal-text transition-colors duration-200 hover:bg-brutal-accent hover:text-white"
              aria-label="Toggle language"
              title={lang === 'en' ? 'Switch to Portuguese' : 'Mudar para Inglês'}
            >
              {lang === 'en' ? 'PT' : 'EN'}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="border-2 border-brutal-border p-2 transition-colors duration-200 hover:bg-brutal-accent hover:text-white md:hidden"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6 text-brutal-text"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t-3 border-brutal-border py-4 md:hidden">
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-sm font-bold uppercase text-brutal-text transition-all duration-200 hover:bg-brutal-accent hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
