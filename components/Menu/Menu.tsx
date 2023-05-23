import { Flex, BackgroundImage, Button, Text } from '@mantine/core';

export function Menu() {
  return (
    <BackgroundImage src="/assets/b3darken.webp" h="100vh">
      <Flex align="center" justify="center" direction="column" h="100vh">
          <Text align="center!important" maw={500} size={20} p={5} m={5}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsum eum inventore qui
            magnam ea quasi? Reiciendis iure, eum quam sed vero maxime, doloremque quas totam quidem
            ullam veritatis repellendus.
          </Text>
          <Button p={5} m={5}>Download our menu</Button>
          <Text align="center!important" maw={500} size={20} p={5} m={5}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque saepe officiis,
            dolor earum laborum, explicabo laboriosam molestias soluta magni cum, eaque fugiat fuga
            asperiores voluptates nihil commodi voluptatibus alias.
          </Text>
          <Button p={5} m={5}>Download our wine card</Button>
      </Flex>
    </BackgroundImage>
  );
}
