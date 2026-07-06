import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { createGetInitialProps } from '@mantine/next';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />

          {/* CookieHub consent management — loads before other trackers. */}
          <Script src="https://cdn.cookiehub.eu/c2/41ffc64b.js" strategy="beforeInteractive" />
          <Script
            id="cookiehub-init"
            strategy="beforeInteractive"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
                document.addEventListener("DOMContentLoaded", function(event) {
                  var cpm = {};
                  window.cookiehub.load(cpm);
                });
              `,
            }}
          />
        </body>
      </Html>
    );
  }
}
