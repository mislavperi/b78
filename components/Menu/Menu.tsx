import { Flex, BackgroundImage, Button, Text, Title } from '@mantine/core';
import { trackClick } from '../../lib/gtag';

interface MenuLink {
  label: string;
  href: string;
}

const menuLinks: MenuLink[] = [
  {
    label: 'View our menu in English',
    href: 'https://drive.google.com/file/d/1H7Ne1TQcR9XSS6k-Dh5sKfpnVeSKubg0/view?usp=sharing',
  },
  {
    label: 'View our menu in Croatian',
    href: 'https://drive.google.com/file/d/1sAIYnG89wLxyE3zTtvCYVND4OEB45LfV/view?usp=sharing',
  },
  {
    label: 'View our dessert menu in English',
    href: 'https://drive.google.com/file/d/1T4ycn-trg5H6nyLurJESZsCYpCz6VHrB/view?usp=sharing',
  },
  {
    label: 'View our dessert menu in Croatian',
    href: 'https://drive.google.com/file/d/1EWdfEqT4MXBQQzeHZd8-LQsM9sR5rkbW/view?usp=sharing',
  },
];

const drinkLinks: MenuLink[] = [
  {
    label: 'View our wine card',
    href: 'https://drive.google.com/file/d/1JZW_PtDR-bNDkT6T1FRPKN1oqYwXpL2o/view?usp=sharing',
  },
  {
    label: 'View our drinks menu',
    href: 'https://drive.google.com/file/d/1vwcyXGnleIBl8NaJ3VAIcqe7pAzaee5m/view?usp=sharing',
  },
];

function MenuButton({ label, href }: MenuLink) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackClick(`menu:${label}`, 'menu')}
    >
      <Button p={5} m={5}>
        {label}
      </Button>
    </a>
  );
}

export function Menu() {
  return (
    <BackgroundImage src="/assets/menu_darken.webp" mih="100vh">
      <Flex align="center" justify="center" direction="column" mih="100vh" py={80}>
        <Title order={2} color="white" align="center" mb="md" sx={{ fontSize: 'calc(20px + 0.5vw)' }}>
          Our Menu
        </Title>
        <Text align="center" maw={500} size="calc(16px + 0.390625vw)" p={5} m={5}>
          Discover a modern twist on traditional Dalmatian cuisine at our restaurant. Our menu
          features fresh ingredients, including herbs from our garden. Delight in Adriatic Sea
          seafood or savor locally sourced sheep meat from Brač. Join us for a culinary adventure
          celebrating Dalmatia&apos;s essence in every bite.
        </Text>
        {menuLinks.map((link) => (
          <MenuButton key={link.label} {...link} />
        ))}
        <Text align="center" maw={500} size="calc(16px + 0.390625vw)" p={5} m={5}>
          Explore the finest Croatian wines on our curated list. Discover flavors from Istria,
          Slavonia, Central Croatia, and Dalmatia. Indulge in aromatic whites, elegant reds, and
          refreshing rosés. Our knowledgeable staff will help you choose the perfect wine to enhance
          your dining experience. Cheers to Croatia&apos;s remarkable winemaking!
        </Text>
        {drinkLinks.map((link) => (
          <MenuButton key={link.label} {...link} />
        ))}
      </Flex>
    </BackgroundImage>
  );
}
