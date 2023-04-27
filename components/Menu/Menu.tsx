import {
  Flex,
  Text,
  Card,
  SimpleGrid,
  Grid,
  Image,
  px,
  useMantineTheme,
  Container,
  Stack,
  Anchor,
  MediaQuery
} from '@mantine/core';

const PRIMARY_COL_HEIGHT = 675;

export function Menu() {
  const theme = useMantineTheme();
  const getSubHeight = (children: number, spacing: number) =>
    PRIMARY_COL_HEIGHT / children - spacing * ((children - 1) / children);
  const getChild = (height: number, asset: string) => {
    return (
      <Card h={height} maw={500} radius="md" withBorder>
        <Card.Section>
          <Image fit="cover" src={asset} />
        </Card.Section>
      </Card>
    );
  };

  return (
    <MediaQuery smallerThan="md" styles={{ flexDirection: "column", height:"auto" }}>
    <Flex align="center" justify="center" h="100vh" bg="#659499">
      <Flex direction="column" w="35%" align="center">
        <Flex direction="column" align="center" justify="center" maw={600} m={10} p={10}>
          <Text size={32} color ="white" align="center">
            Wine card
          </Text>
          <Text size={16} color="white" align="center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis debitis similique
            recusandae libero fugit iste esse harum consectetur dolorum hic, amet delectus officia
            corrupti iure, placeat soluta voluptates quis consequuntur!
          </Text>
          <Anchor size={20} color="white" align="center" >
            Take a peek into our carefully selected wine card
          </Anchor>
        </Flex>
        <Flex direction="column" align="center" justify="center" maw={600} m={20} p={20}>
          <Text size={32} color="white" align="center">
            Menu
          </Text>
          <Text size={16} color="white" align="center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis debitis similique
            recusandae libero fugit iste esse harum consectetur dolorum hic, amet delectus officia
            corrupti iure, placeat soluta voluptates quis consequuntur!
          </Text>
          <Anchor size={20} color="white" align="center">
            Experience the journey that is our carefully crafted menu
          </Anchor>
        </Flex>
      </Flex>

      <Container my="md" fluid>
        <SimpleGrid cols={3} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }, {maxWidth:"xl", cols:2}]}>
          {getChild(PRIMARY_COL_HEIGHT, '/assets/Boket_6.jpg')}

          <Stack>
            {getChild(getSubHeight(2, px(theme.spacing.md)), '/assets/Boket_3.jpg')}
            {getChild(getSubHeight(2, px(theme.spacing.md)), '/assets/Boket_159.jpg')}
          </Stack>
          <Stack>
            {getChild(getSubHeight(2, px(theme.spacing.md)), '/assets/Boket_155.jpg')}
            {getChild(getSubHeight(2, px(theme.spacing.md)), '/assets/Boket_79.jpg')}
          </Stack>
        </SimpleGrid>
      </Container>
    </Flex>
    </MediaQuery>
  );
}
