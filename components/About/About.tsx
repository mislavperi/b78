import { Flex, Text, Image, MediaQuery } from '@mantine/core';

export function About() {
  return (
    <Flex h="100vh">
      <MediaQuery smallerThan="md" styles={{ width: '0%' }}>
        <Flex w="35%">
          <Image src="/assets/about.webp" alt="Olive drops" height="100vh" />
        </Flex>
      </MediaQuery>
      <MediaQuery
        smallerThan="md"
        styles={{
          background: `url('assets/about_darken.webp')`,
          width: '100%',
          height: '100%',
          backgroundSize: "cover",
        }}
      >
        <Flex
          sx={{
            background: '#02323C',
          }}
          h="100vh"
          w="65%"
          direction="column"
          justify="center"
        >
          <Text mx={40} size="calc(14px + 0.390625vw)">
            About
          </Text>
          <Text size="calc(24px + 0.1vw)" mx={40}>
          Welcome to Boket78, a hidden gem in Bol, on the picturesque island of Brač. Nestled in the heart of the town, our restaurant offers a beautiful location combined with the privacy of our secret garden. We take pride in presenting traditional Dalmatian cuisine with a modern twist, using only the freshest ingredients. Join us for an unforgettable dining experience that combines the best of local flavors and a serene ambiance. Welcome to Boket78, where culinary excellence meets island charm.
          </Text>
        </Flex>
      </MediaQuery>
    </Flex>
  );
}
