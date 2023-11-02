import 'i18next'
// import all namespaces (for the default language, only)
import englishTranslations from './locales/en/translations.json'
import polishTranslations from './locales/pl/translations.json'

declare module 'i18next' {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: 'pl'
    // custom resources type
    resources: {
      en: typeof englishTranslations
      pl: typeof polishTranslations
    }
    // other
  }
}
