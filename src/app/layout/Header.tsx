import { useState } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import MenuIcon from '@mui/icons-material/Menu'
import { IMAGE_PATHS, NAV_ITEMS } from '../../content/site'

export function Header() {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <AppBar
      position="sticky"
      sx={(theme) => ({
        background: `linear-gradient(to right, ${theme.palette.primary.main} 15%, ${theme.palette.secondary.main} 40%)`,
      })}
    >
      <Toolbar sx={{ gap: 2, minHeight: { xs: 88, sm: 108 } }}>
        <Box
          component={RouterLink}
          to="/"
          aria-label="ASACOR — Inicio"
          sx={{
            display: 'flex',
            alignItems: 'center',
            mr: 'auto',
            lineHeight: 0,
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          <Box
            role="img"
            aria-label="ASACOR, asociación argentina de conservadores y restauradores"
            sx={{
              width: { xs: 230, sm: 290, md: 340 },
              height: { xs: 64, sm: 80, md: 92 },
              bgcolor: 'secondary.main',
              maskImage: `url(${IMAGE_PATHS.logo})`,
              maskMode: 'alpha',
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskImage: `url(${IMAGE_PATHS.logo})`,
              WebkitMaskSourceType: 'alpha',
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
            }}
          />
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
          {NAV_ITEMS.map((item) => (
            <Button
              key={item.to}
              component={RouterLink}
              to={item.to}
              color="inherit"
              sx={{
                fontWeight: location.pathname === item.to ? 700 : 600,
                borderBottom: location.pathname === item.to ? '2px solid' : '2px solid transparent',
                borderColor: location.pathname === item.to ? 'primary.main' : 'transparent',
                borderRadius: 0,
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <IconButton
          color="inherit"
          aria-label="Abrir menú"
          onClick={() => setOpen(true)}
          sx={{ display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 260, pt: 2 }}>
          {NAV_ITEMS.map((item) => (
            <ListItemButton
              key={item.to}
              component={RouterLink}
              to={item.to}
              selected={location.pathname === item.to}
              onClick={() => setOpen(false)}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </AppBar>
  )
}
