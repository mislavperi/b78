import { Flex, BackgroundImage, Button, Text } from '@mantine/core';

export function Menu() {
  return (
    <BackgroundImage src="/assets/menu_darken.webp" h="100vh">
      <Flex align="center" justify="center" direction="column" h="100vh">
        {/* @ts-ignore */}
        <Text align="center!important" maw={500} size="calc(16px + 0.390625vw)" p={5} m={5}>
          Discover a modern twist on traditional Dalmatian cuisine at our restaurant. Our menu features fresh ingredients, including herbs from our garden. Delight in Adriatic Sea seafood or savor locally sourced sheep meat from Brač. Join us for a culinary adventure celebrating Dalmatia's essence in every bite.
        </Text>
        <a href="https://drive.google.com/file/d/1H7Ne1TQcR9XSS6k-Dh5sKfpnVeSKubg0/view?usp=sharing" target="_blank">
          <Button p={5} m={5}>
            View our menu in English
          </Button>
        </a>
        <a href="https://drive.google.com/file/d/1sAIYnG89wLxyE3zTtvCYVND4OEB45LfV/view?usp=sharing" target="_blank">
          <Button p={5} m={5}>
            View our menu in Croatian
          </Button>
        </a>

        <a href="https://drive.google.com/file/d/1T4ycn-trg5H6nyLurJESZsCYpCz6VHrB/view?usp=sharing" target="_blank">
          <Button p={5} m={5}>
            View our dessert menu in English
          </Button>
        </a>
        <a href="https://drive.google.com/file/d/1EWdfEqT4MXBQQzeHZd8-LQsM9sR5rkbW/view?usp=sharing" target="_blank">
          <Button p={5} m={5}>
            View our dessert menu in Croatian
          </Button>
        </a>
        {/* @ts-ignore */}
        <Text align="center!important" maw={500} size="calc(16px + 0.390625vw)" p={5} m={5}>
          Explore the finest Croatian wines on our curated list. Discover flavors from Istria, Slavonia, Central Croatia, and Dalmatia. Indulge in aromatic whites, elegant reds, and refreshing rosés. Our knowledgeable staff will help you choose the perfect wine to enhance your dining experience. Cheers to Croatia's remarkable winemaking!
        </Text>
        <a href="https://drive.google.com/file/d/1JZW_PtDR-bNDkT6T1FRPKN1oqYwXpL2o/view?usp=sharing" target="_blank">
          <Button p={5} m={5}>
            View our wine card
          </Button>
        </a>
        <a href="https://drive.google.com/file/d/1vwcyXGnleIBl8NaJ3VAIcqe7pAzaee5m/view?usp=sharing" target="_blank">
          <Button p={5} m={5}>
            View our drinks menu
          </Button>
        </a>

      </Flex>
    </BackgroundImage>
  );
}
