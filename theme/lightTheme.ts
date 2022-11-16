import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#109e50',
      contrastText: '#fff',
    },
    secondary: { main: '#9147FF' },
  },
  typography: {
    fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
    fontSize: 14,
    h1: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 40,
    },
    h2: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 32,
    },
    h3: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 24,
    },
    h4: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 20,
    },
    h5: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 16,
    },
    h6: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 14,
    },
  },
});
