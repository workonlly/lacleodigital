import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import { GlobalProvider } from './assets/globalvalue.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalProvider>
    <App />
    </GlobalProvider>
  </StrictMode>,
)
