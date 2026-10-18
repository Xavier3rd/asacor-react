import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { AppShell } from './layout/AppShell'

function routerBasename(): string {
  const base = import.meta.env.BASE_URL
  if (!base || base === '/') return '/'
  return base.endsWith('/') ? base.slice(0, -1) : base
}

const InicioPage = lazy(() => import('../pages/InicioPage'))
const QuienesSomosPage = lazy(() => import('../pages/QuienesSomosPage'))
const ActividadesPage = lazy(() => import('../pages/ActividadesPage'))
const DirectorioPage = lazy(() => import('../pages/DirectorioPage'))
const BibliotecaPage = lazy(() => import('../pages/BibliotecaPage'))
const LibrosPage = lazy(() => import('../pages/LibrosPage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <AppShell />,
      children: [
        { index: true, element: <InicioPage /> },
        { path: 'quienes-somos', element: <QuienesSomosPage /> },
        { path: 'actividades', element: <ActividadesPage /> },
        { path: 'directorio', element: <DirectorioPage /> },
        { path: 'biblioteca', element: <BibliotecaPage /> },
        { path: 'libros', element: <LibrosPage /> },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ],
  { basename: routerBasename() },
)
