import { useState } from 'react';
import NextApp, { AppProps, AppContext } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Navigation } from '../components/Navigation/Navigation';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <title>Mantine next example</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <MantineProvider
        theme={{
          fontFamily: 'Verdana, sans-serif',
          colorScheme: 'light',
          loader: 'bars',
          breakpoints: {
            pml: "70em",
            xxl: "98em"
          },
          components: {
            Button: {
              styles: {
                root: {
                  backgroundColor: "#B3852D",
                }
              }
            },
            Text: {
              styles: {
                root: {
                  color: "white",
                  align: "center"
                }
              }
            },
            Anchor: {
              styles: {
                root: {
                  color: "white"
                }
              }
            },
            ActionIcon: {
              styles: {
                root: {
                  color: "white",
                  backgroundColor: "#B3852D",
                  '&:hover': {
                    backgroundColor: "rgba(179, 133, 45, 0.9)"
                  }
                }
              }
            },
            Flex: {
              styles: {
                root: {
                  backgroundColor: "#659499",
                  width: "30px",
                }
              }
            }
          }
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Navigation />
        <Component {...pageProps} />
        <Notifications />
      </MantineProvider>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie('mantine-color-scheme', appContext.ctx) || 'dark',
  };
};
