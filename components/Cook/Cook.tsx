import { Flex, Image, Text, MediaQuery } from '@mantine/core';

export function Cook() {
  return (
    <Flex h="100vh">
      <MediaQuery
        smallerThan="md"
        styles={{ 
          background: `url('assets/marko_darken.webp')`,
          width: '100%',
          height: '100%',
          backgroundSize: "cover",
         }}
      >
      <Flex
        w="65%"
        direction="column"
        justify="center"
        sx={{ background: '#02323C' }}
      >
        {/* @ts-ignore */}
        <Text size="calc(36px + 0.390625vw)" my={20} mx={40} align="end!important">
          Chef Marko Marijanović
        </Text>
        {/* @ts-ignore */}
        <Text align="end!important" size="calc(20px + 0.390625vw)" mx={40}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta similique quisquam
          nulla eligendi aspernatur deleniti architecto enim dolor dolorem reiciendis quaerat beatae
          voluptas saepe tempore nihil quos, illo inventore?
        </Text>
      </Flex>
      </MediaQuery>

      <MediaQuery smallerThan="md" styles={{width:"0%"}}>
      <Flex w="35%" m={0} p={0} >
        <Image src="/assets/marko.webp" height="100vh" />
      </Flex>
      </MediaQuery>
    </Flex>
  );
}
