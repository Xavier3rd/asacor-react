import type { ReactNode } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { IMAGE_PATHS, SITE } from '../../content/site'

function FooterIcon({ src, label }: { src: string; label: string }) {
  return (
    <Box
      role="img"
      aria-label={label}
      sx={{
        width: 22,
        height: 22,
        flexShrink: 0,
        bgcolor: 'secondary.main',
        maskImage: `url(${src})`,
        maskMode: 'alpha',
        maskSize: 'contain',
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskImage: `url(${src})`,
        WebkitMaskSourceType: 'alpha',
        WebkitMaskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
      }}
    />
  )
}

function FooterLink({
  href,
  icon,
  iconLabel,
  children,
  external = false,
}: {
  href: string
  icon: string
  iconLabel: string
  children: ReactNode
  external?: boolean
}) {
  return (
    <Link
      href={href}
      color="inherit"
      underline="hover"
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}
    >
      <FooterIcon src={icon} label={iconLabel} />
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'secondary.main', mt: 'auto', py: 4 }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
          sx={{ justifyContent: 'space-between' }}
        >
          <Box>
            <Typography variant="h6">{SITE.name}</Typography>
            <Typography variant="body2" sx={{ maxWidth: 420, opacity: 0.85 }}>
              {SITE.fullName}
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Contacto
            </Typography>
            <FooterLink href={`mailto:${SITE.email}`} icon={IMAGE_PATHS.mail} iconLabel="Correo">
              {SITE.email}
            </FooterLink>
          </Box>
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Redes
            </Typography>
            <Stack spacing={0.75}>
              <FooterLink href={SITE.facebook} icon={IMAGE_PATHS.facebook} iconLabel="Facebook" external>
                Facebook
              </FooterLink>
              <FooterLink href={SITE.instagram} icon={IMAGE_PATHS.instagram} iconLabel="Instagram" external>
                Instagram @asacorargentina
              </FooterLink>
            </Stack>
          </Box>
        </Stack>
        <Typography variant="caption" component="p" sx={{ mt: 3, opacity: 0.7 }}>
          © {new Date().getFullYear()} ASACOR
        </Typography>
      </Container>
    </Box>
  )
}
