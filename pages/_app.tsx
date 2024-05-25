import NextApp, { AppProps, AppContext } from 'next/app';
import { getCookie } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Navigation } from '../components/Navigation/Navigation';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <title>Boket78</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link href="https://awards.infcdn.net/r_rcm.css" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
          rel="stylesheet"
        />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: 'Quicksand',
          colorScheme: 'light',
          loader: 'bars',
          breakpoints: {
            pml: '70em',
            xxl: '98em',
          },
          components: {
            Button: {
              styles: {
                root: {
                  backgroundColor: '#B3852D',
                },
              },
            },
            Text: {
              styles: {
                root: {
                  color: 'white',
                  textAlign: 'left',
                },
              },
            },
            Anchor: {
              styles: {
                root: {
                  color: 'white',
                },
              },
            },
            ActionIcon: {
              styles: {
                root: {
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(248, 249, 250, 0); !force',
                  },
                },
              },
            },
            Flex: {
              styles: {
                root: {
                  backgroundColor: '#659499',
                  width: '30px',
                },
              },
            },
          },
        }}
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
