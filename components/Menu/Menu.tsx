import {
  Flex,
  Text,
  Card,
  SimpleGrid,
  Grid,
  px,
  useMantineTheme,
  Container,
  Stack,
  Anchor,
  MediaQuery
} from '@mantine/core';

import Image, { StaticImageData } from "next/image"

import boket3 from '../../public/assets/Boket_3.jpg'
import boket6 from '../../public/assets/Boket_6.jpg'
import boket159 from '../../public/assets/Boket_159.jpg'
import boket155 from '../../public/assets/Boket_155.jpg'
import boket79 from '../../public/assets/Boket_79.jpg'

const PRIMARY_COL_HEIGHT = 575;

export function Menu() {
  const theme = useMantineTheme();
  const getSubHeight = (children: number, spacing: number) =>
    PRIMARY_COL_HEIGHT / children - spacing * ((children - 1) / children);
  const getChild = (height: number, asset: StaticImageData) => {
    return (
      <Card mah={height} h={height} w={350} radius="md" withBorder>
        <Card.Section>
          <Image alt="image" height={height}  src={asset}  style={{ objectFit:"cover" }}/>
        </Card.Section>
      </Card>
    );
  };

  return (
    <MediaQuery smallerThan="md" styles={{ flexDirection: "column", height:"auto" }}>
    <Flex align="center" justify="center" h="100vh" bg="#659499" id="menu">
      <Flex direction="column" w="35%" align="center">
        <Flex direction="column" align="center" justify="center" maw={600} m={10} p={10}>
          <Text size={32} align="center">
            Wine card
          </Text>
          <Text size={16} align="center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis debitis similique
            recusandae libero fugit iste esse harum consectetur dolorum hic, amet delectus officia
            corrupti iure, placeat soluta voluptates quis consequuntur!
          </Text>
          <Anchor size={20} align="center" >
            Take a peek into our carefully selected wine card
          </Anchor>
        </Flex>
        <Flex direction="column" align="center" justify="center" maw={600} m={20} p={20}>
          <Text size={32} align="center">
            Menu
          </Text>
          <Text size={16} align="center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis debitis similique
            recusandae libero fugit iste esse harum consectetur dolorum hic, amet delectus officia
            corrupti iure, placeat soluta voluptates quis consequuntur!
          </Text>
          <Anchor size={20} align="center">
            Experience the journey that is our carefully crafted menu
          </Anchor>
        </Flex>
      </Flex>

      <Container my="md" fluid>
        <SimpleGrid cols={3} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }, {maxWidth:"x", cols:2}]}>
          {getChild(PRIMARY_COL_HEIGHT, boket6)}

          <Stack>
            {getChild(getSubHeight(2, px(theme.spacing.md)), boket3)}
            {getChild(getSubHeight(2, px(theme.spacing.md)), boket159)}
          </Stack>
          <Stack>
            {getChild(getSubHeight(2, px(theme.spacing.md)), boket155)}
            {getChild(getSubHeight(2, px(theme.spacing.md)), boket79)}
          </Stack>
        </SimpleGrid>
      </Container>
    </Flex>
    </MediaQuery>
  );
}
