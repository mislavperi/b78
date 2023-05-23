import { Container, Flex, Image, Text, Title } from '@mantine/core';

export function Cook() {
  return (
    <Flex h="100vh">
      <Flex
        w="65%"
        bg="cyan"
        align="center"
        direction="column"
        justify="center"
        my={120}
        sx={{ background: 'linear-gradient(to right top, #659499, #5c969d, #5299a0, #469ba4, #379da8);' }}
      >
        <Text align="center!important" size={48} my={60}>
          Chef Ime Prezime
        </Text>
        <Text align="center!important" size={24} mx={20}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta similique quisquam
          nulla eligendi aspernatur deleniti architecto enim dolor dolorem reiciendis quaerat beatae
          voluptas saepe tempore nihil quos, illo inventore?
        </Text>
      </Flex>
      <Flex w="35%" m={0} p={0} bg="grape">
        <Image src="/assets/Boket_6.jpg" height="100vh" />
      </Flex>
    </Flex>
  );
}
