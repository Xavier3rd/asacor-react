import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined'

type EmptyStateProps = {
  title?: string
  message?: string
}

export function EmptyState({
  title = 'En construcción',
  message = 'Esta sección estará disponible próximamente.',
}: EmptyStateProps) {
  return (
    <Box
      sx={{
        py: 8,
        px: 2,
        textAlign: 'center',
        bgcolor: 'background.paper',
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <ConstructionOutlinedIcon
        sx={(theme) => ({
          fontSize: 60,
          mb: 1,
          color: 'secondary.main',
          '& path': {
            stroke: theme.palette.primary.main,
            strokeWidth: 0.5,
          },
        })}
      />
      <Typography variant="h3" gutterBottom>
        {title}
      </Typography>
      <Typography color="text.secondary">{message}</Typography>
    </Box>
  )
}
