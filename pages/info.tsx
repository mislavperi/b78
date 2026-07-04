import Head from 'next/head';
import { Info } from '../components/Info/Info';

export default function InfoPage() {
  return (
    <>
      <Head>
        <title>Company Information — Boket78</title>
        <meta name="description" content="Legal and company information for Boket78 restaurant (MORE BEER d.o.o.) in Bol, Brač." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://boket78.com/info" />
      </Head>
      <Info />
    </>
  );
}
