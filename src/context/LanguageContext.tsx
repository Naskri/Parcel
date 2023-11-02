import { ReactNode, createContext, useContext, useState } from 'react'
import { resources } from '../lib/i18n/i18n'
import i18next from 'i18next'

type LanguageContextProps = {
  children: ReactNode
}

type LanguagesPossibility = keyof typeof resources

type LanguageContextDataState = {
  language: LanguagesPossibility
  changeLanguage: (language: LanguagesPossibility) => void
}

export const isLanguage = (language: string): language is LanguagesPossibility => {
  return language === 'en' || language === 'pl'
}

export const LanguageContextData = createContext<LanguageContextDataState | null>(null)

export const LanguageContext = ({ children }: LanguageContextProps) => {
  const [language, setLanguage] = useState<LanguagesPossibility>('pl')

  const changeLanguage = (language: LanguagesPossibility) => {
    setLanguage(language)
    i18next.changeLanguage(language)
  }

  return (
    <LanguageContextData.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContextData.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContextData)

  if (context === null) {
    throw new Error('Cant use context without provider!')
  }

  return context
}
