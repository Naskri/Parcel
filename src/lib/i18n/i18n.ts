import i18next from 'i18next'

import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import englishTranslations from './locales/en/translations.json'
import polishTranslations from './locales/pl/translations.json'

export const resources = {
  en: {
    title: 'English',
    translation: englishTranslations,
  },
  pl: {
    title: 'Polski',
    translation: polishTranslations,
  },
}

export const initI18N = () => {
  i18next.use(initReactI18next).use(LanguageDetector).init({ resources })
}
