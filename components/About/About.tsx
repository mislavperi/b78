import { Flex, Text, BackgroundImage } from '@mantine/core';

export function About() {
  return (
    <BackgroundImage src="/assets/about.webp" h="100vh">
      <Flex align="center" justify="center" mih="100vh" id="about" direction="column">
        <Text maw={700} size="1.5rem" align="center" p={10}>
          Embark on a wondrous journey to a modern restaurant situated in the serene seaside town of
          Croatia, where every visit promises to be an unforgettable culinary adventure. Our cuisine
          is the embodiment of traditional Croatian flavors blended with a contemporary twist, which
          tantalizes the senses and leaves you yearning for more.
        </Text>
        <br />
        <Text maw={700} size="1.5rem" align="center" p={10}>
          The delectable dishes we offer are prepared with fresh, locally sourced ingredients,
          allowing our chefs to craft exquisite masterpieces that are not only visually stunning but
          also incredibly delicious. The unique flavors of our cuisine, combined with the
          breathtaking views of the Adriatic Sea, make for an experience that will leave a lasting
          impression on your taste buds and your memory.
        </Text>
      </Flex>
    </BackgroundImage>
  );
}
