import { Flex, Text, Image } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
export function About() {
  return (
    <Flex h="100vh">
      <Flex w="35%">
        <Image src="/assets/Boket_6.jpg" alt="Olive drops" height="100vh" />
      </Flex>
      <Flex
        sx={{
          background: 'linear-gradient(to right top, #659499, #5c969d, #5299a0, #469ba4, #379da8);',
        }}
        h="100vh"
        w="65%"
        direction="column"
        justify="center"
      >
        <Text mx={40} size={18}>
          About
        </Text>
        <Text size={28} mx={40}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit iure harum, dolorem
          explicabo molestiae sit magni quos doloribus ipsum laboriosam ut, odit non placeat. Ut
          nulla explicabo corporis animi neque!s Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Voluptates voluptas quos ducimus iste laboriosam perferendis ipsa laborum, delectus
          expedita suscipit quia ullam quasi sint laudantium ea illo eius deleniti eligendi.
        </Text>
        <Flex align="center" justify="flex-end">
        <Text>Hear our story from the start </Text>
        <IconArrowRight color="white" />
        </Flex>
      </Flex>
    </Flex>
  );
}
