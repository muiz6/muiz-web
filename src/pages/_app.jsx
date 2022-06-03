import '@fontsource/space-grotesk';
import '@fontsource/space-grotesk/700.css';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';

import theme from 'theme';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Muhammad Muiz</title>
        <meta name="description" content="Muhammad Muiz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
