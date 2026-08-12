import { createContext, useContext, useState, type ReactNode } from 'react'
import { translations, type Lang, type T } from './translations'

type LangCtx = { lang: Lang; setLang: (l: Lang) => void; t: T }

const Ctx = createContext<LangCtx | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('it')
  return (
    <Ctx.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </Ctx.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
