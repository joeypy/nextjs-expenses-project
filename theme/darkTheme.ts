import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#109e50', contrastText: '#fff' },
    secondary: { main: '#9147FF' },
  },
  typography: {
    fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
    fontSize: 12,
    h1: {
      fontFamily: ['Poppins', 'Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 35,
      fontWeight: 600,
    },
    h2: {
      fontFamily: ['Poppins', 'Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 32,
    },
    h3: {
      fontFamily: ['Poppins', 'Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 24,
    },
    h4: {
      fontFamily: ['Poppins', 'Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 20,
    },
    h5: {
      fontFamily: ['Poppins', 'Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 16,
    },
    h6: {
      fontFamily: ['Poppins', 'Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 14,
    },
  },
});
