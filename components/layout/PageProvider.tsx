import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider as PreferredThemeProvider } from 'next-themes';
import Head from 'next/head';
import { FC } from 'react';
import { createEmotionCache } from '@/theme/index';
import { MUIThemeProvider } from './';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface PageProviderProps {
  emotionCache?: EmotionCache;
  children: React.ReactNode;
}

export const PageProvider: FC<PageProviderProps> = ({
  children,
  emotionCache = clientSideEmotionCache,
}) => (
  <PreferredThemeProvider>
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MUIThemeProvider>{children}</MUIThemeProvider>
      </LocalizationProvider>
    </CacheProvider>
  </PreferredThemeProvider>
);
