import { Flex, BackgroundImage, Button, Text } from '@mantine/core';

export function Menu() {
  return (
    <BackgroundImage src="/assets/menu_darken.webp" h="100vh">
      <Flex align="center" justify="center" direction="column" h="100vh">
        {/* @ts-ignore */}
        <Text align="center!important" maw={500} size="calc(16px + 0.390625vw)" p={5} m={5}>
        Experience the best of traditional Dalmatian cuisine with a modern twist at our restaurant. Our menu showcases the freshest ingredients, including herbs from our own garden. Indulge in the flavors of the Adriatic Sea with our exquisite seafood dishes, or savor the taste of Brač with our locally sourced sheep meat. Join us for a culinary adventure that celebrates the essence of Dalmatia in every bite.
        </Text>
        <Button p={5} m={5}>
          Download our menu
        </Button>
        {/* @ts-ignore */}
        <Text align="center!important" maw={500} size="calc(16px + 0.390625vw)" p={5} m={5}>
        Experience the best of Croatian wines with our thoughtfully curated wine list. Our exclusive selection showcases wines from across Croatia, including Istria, Slavonia, Central Croatia, and Dalmatia. Discover the unique flavors and craftsmanship of each region as you indulge in our collection of aromatic whites, elegant reds, and refreshing rosés. Let our knowledgeable staff guide you in selecting the perfect wine to enhance your dining experience. Cheers to the remarkable world of Croatian winemaking!
        </Text>
        <Button p={5} m={5}>
          Download our wine card
        </Button>
      </Flex>
    </BackgroundImage>
  );
}
