import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ColorModeContext, useMode } from '../theme/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Layout } from '@/components/layout';

export default function App({ Component, pageProps }: AppProps) {
  const [theme, colorMode] = useMode();

  return (
    // @ts-ignore
    <ColorModeContext.Provider value={colorMode}>
      {/* @ts-ignore */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
