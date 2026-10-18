import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import { Header } from './Header'
import { Footer } from './Footer'

export function AppShell() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box component="main" sx={{ flex: 1, py: 4 }}>
        <Suspense
          fallback={
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
              <CircularProgress />
            </Box>
          }
        >
          <Outlet />
        </Suspense>
      </Box>
      <Footer />
    </Box>
  )
}
