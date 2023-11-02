import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './style/global.css'
import { initI18N } from './lib/i18n/i18n.ts'
import { LanguageContext } from './context/LanguageContext.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'

initI18N()

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageContext>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </LanguageContext>
  </React.StrictMode>
)
