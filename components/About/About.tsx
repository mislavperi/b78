import { Flex, Text } from '@mantine/core';

export function About() {
  return (
    <Flex align="center" justify="center" h="100vh" id="about" bg="#659499" direction="column">
      <Text maw={700} size={24} align="center">
      Embark on a wondrous journey to a modern restaurant situated in the serene seaside town of Croatia, where every visit promises to be an unforgettable culinary adventure. Our cuisine is the embodiment of traditional Croatian flavors blended with a contemporary twist, which tantalizes the senses and leaves you yearning for more.
      </Text>
      <br />
      <Text maw={700} size={24} align="center">
      The delectable dishes we offer are prepared with fresh, locally sourced ingredients, allowing our chefs to craft exquisite masterpieces that are not only visually stunning but also incredibly delicious. The unique flavors of our cuisine, combined with the breathtaking views of the Adriatic Sea, make for an experience that will leave a lasting impression on your taste buds and your memory.
      </Text>
    </Flex>
  );
}
