import { Flex, Text, Image, MediaQuery, Title } from '@mantine/core';

export function About() {
  return (
    <Flex mih="100vh">
      <MediaQuery smallerThan="md" styles={{ width: '0%', display: 'none' }}>
        <Flex w="35%">
          <Image
            src="/assets/about.webp"
            alt="Fresh olives and greens at Boket78 restaurant"
            height="100vh"
            fit="cover"
          />
        </Flex>
      </MediaQuery>
      <MediaQuery
        smallerThan="md"
        styles={{
          background: `url('/assets/about_darken.webp')`,
          width: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Flex
          sx={{
            background: '#02323C',
          }}
          mih="100vh"
          w="65%"
          direction="column"
          justify="center"
          py={80}
        >
          <Title order={2} color="white" mx={40} mb="md" sx={{ fontSize: 'calc(14px + 0.390625vw)' }}>
            About
          </Title>
          <Text size="calc(20px + 0.1vw)" mx={40}>
            Welcome to Boket78, a hidden gem in Bol, on the picturesque island of Brač. Nestled in
            the heart of the town, our restaurant offers a beautiful location combined with the
            privacy of our secret garden. We take pride in presenting traditional Dalmatian cuisine
            with a modern twist, using only the freshest ingredients. Join us for an unforgettable
            dining experience that combines the best of local flavors and a serene ambiance. Welcome
            to Boket78, where culinary excellence meets island charm.
          </Text>
        </Flex>
      </MediaQuery>
    </Flex>
  );
}
