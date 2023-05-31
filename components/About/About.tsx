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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit iure harum, dolorem
            explicabo molestiae sit magni quos doloribus ipsum laboriosam ut, odit non placeat. Ut
            nulla explicabo corporis animi neque!s Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Voluptates voluptas quos ducimus iste laboriosam perferendis ipsa
            laborum, delectus expedita suscipit quia ullam quasi sint laudantium ea illo eius
            deleniti eligendi.
          </Text>
        </Flex>
      </MediaQuery>
    </Flex>
  );
}
