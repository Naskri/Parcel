import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './style/global.css'
import { initI18N } from './lib/i18n/i18n.ts'
import { LanguageContext } from './context/LanguageContext.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

initI18N()

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageContext>
      <QueryClientProvider client={queryClient}>
        <DndProvider backend={HTML5Backend}>
          <App />
        </DndProvider>
      </QueryClientProvider>
    </LanguageContext>
  </React.StrictMode>
)
