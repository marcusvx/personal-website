import { useState, useEffect } from 'react'
import translations, { type Locale, defaultLocale } from './translations'

const LANG_KEY = 'lang'

function getInitialLang(): Locale {
    if (typeof window === 'undefined') return defaultLocale
    const saved = localStorage.getItem(LANG_KEY)
    if (saved === 'en' || saved === 'pt') return saved
    return defaultLocale
}

export function useLanguage() {
    const [lang, setLangState] = useState<Locale>(defaultLocale)

    // Sync from localStorage on mount (client only)
    useEffect(() => {
        setLangState(getInitialLang())

        const handler = () => {
            setLangState(getInitialLang())
        }
        window.addEventListener('languageChange', handler)
        return () => window.removeEventListener('languageChange', handler)
    }, [])

    function setLang(newLang: Locale) {
        localStorage.setItem(LANG_KEY, newLang)
        setLangState(newLang)
        // Notify Astro-rendered sections and Skills.astro
        window.dispatchEvent(new CustomEvent('languageChange', { detail: newLang }))
        // Update the <html lang> attribute for accessibility
        document.documentElement.lang = newLang === 'pt' ? 'pt-BR' : 'en'
    }

    return { lang, t: translations[lang], setLang }
}
