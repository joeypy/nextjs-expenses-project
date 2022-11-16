import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { CacheProvider, css, EmotionCache } from '@emotion/react';
import { createEmotionCache } from '@/theme/index';
import { GlobalStyles, CssBaseline } from '@mui/material';
import { Layout, PageProvider } from '@/components/layout';

interface MUIAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App({
  Component,
  emotionCache,
  pageProps,
}: MUIAppProps) {
  return (
    <PageProvider emotionCache={emotionCache}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PageProvider>
  );
}
