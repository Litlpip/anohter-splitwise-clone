import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Providers } from './providers'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ROUTES } from '@/shared/config/constants'

export function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Providers>
  )
}
