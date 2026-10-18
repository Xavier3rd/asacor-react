import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#325158',
      dark: '#243940',
      light: '#4a6d75',
      contrastText: '#f1e29f',
    },
    secondary: {
      main: '#f1e29f',
      dark: '#d9c878',
      light: '#f6ecc0',
      contrastText: '#325158',
    },
    warning: {
      main: '#E67B00',
      dark: '#C45F00',
      contrastText: '#ffffff',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#325158',
      secondary: '#5a7378',
    },
  },
  typography: {
    fontFamily: '"Tahoma", "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: '2rem', fontWeight: 700 },
    h2: { fontSize: '1.6rem', fontWeight: 700 },
    h3: { fontSize: '1.25rem', fontWeight: 600 },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
    },
    MuiAppBar: {
      defaultProps: { color: 'inherit' },
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: 'transparent',
          color: theme.palette.primary.main,
        }),
      },
    },
  },
})
