import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

type PageHeaderProps = {
  title: string
  subtitle?: string
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h1" color="text.secondary" gutterBottom>
        {title}
      </Typography>
      {subtitle ? (
        <Typography variant="body1" color="text.primary">
          {subtitle}
        </Typography>
      ) : null}
    </Box>
  )
}
