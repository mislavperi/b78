import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Navigation } from '../components/Navigation/Navigation';
import { GA_MEASUREMENT_ID, pageview } from '../lib/gtag';

const SITE_URL = 'https://boket78.com';
const SITE_TITLE = 'Boket78 — Restaurant in Bol, Brač';
const SITE_DESCRIPTION =
  'Boket78 is a restaurant in Bol on the island of Brač, serving traditional Dalmatian cuisine with a modern twist in a hidden secret garden. Fresh Adriatic seafood, local Brač lamb and curated Croatian wines.';

// Restaurant structured data (schema.org) to help search engines and rich results.
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Boket78',
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/assets/landing.webp`,
  servesCuisine: ['Dalmatian', 'Croatian', 'Mediterranean', 'Seafood'],
  priceRange: '$$',
  telephone: '+385995935023',
  email: 'info@boket78.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ul. Radića Frane 14',
    addressLocality: 'Bol',
    addressRegion: 'Brač',
    postalCode: '21420',
    addressCountry: 'HR',
  },
  sameAs: [
    'https://www.facebook.com/boket78/',
    'https://www.instagram.com/boket78.bol/',
    'https://www.tripadvisor.com/Restaurant_Review-g303802-d24138556-Reviews-Boket78-Bol_Brac_Island_Split_Dalmatia_County_Dalmatia.html',
  ],
  openingHours: 'Mo-Su 12:00-24:00',
};

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const router = useRouter();

  // Track client-side route changes as page views in Google Analytics.
  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return undefined;
    const handleRouteChange = (url: string) => pageview(url);
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta
          name="keywords"
          content="Boket78, restaurant Bol, Brač restaurant, Dalmatian cuisine, Croatian food, seafood Bol, restaurant Brač island, secret garden restaurant"
        />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#02323C" />
        <link rel="canonical" href={SITE_URL} />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:type" content="restaurant.restaurant" />
        <meta property="og:site_name" content="Boket78" />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={`${SITE_URL}/assets/landing.webp`} />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}/assets/landing.webp`} />

        <link href="https://awards.infcdn.net/r_rcm.css" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
          rel="stylesheet"
        />

        {/* eslint-disable-next-line react/no-danger */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      {/* Google Analytics 4 — only loaded when a measurement ID is configured. */}
      {GA_MEASUREMENT_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
              `,
            }}
          />
        </>
      )}

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
          globalStyles: () => ({
            html: {
              scrollBehavior: 'smooth',
              overflowX: 'hidden',
            },
            body: {
              overflowX: 'hidden',
            },
          }),
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
