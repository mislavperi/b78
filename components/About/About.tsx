import { Flex, Text } from '@mantine/core';

export function About() {
  return (
    <Flex align="center" justify="center" h="100vh" id="about" bg="#659499">
      <Text maw={700} align="center" size={32} color="white">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, voluptatem minus? Nesciunt
        sequi sunt aliquid optio eligendi saepe eveniet perspiciatis facere ipsa earum temporibus
        totam id, voluptatibus, corporis voluptates unde.
      </Text>
    </Flex>
  );
}
