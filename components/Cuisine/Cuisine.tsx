import {
  Container,
  Grid,
  Skeleton,
  SimpleGrid,
  rem,
  useMantineTheme,
  Stack,
  px,
  Text,
  Flex,
  MediaQuery,
  Card,
   Image
} from '@mantine/core';
import { useEffect, useRef } from 'react';
import useStyles from './Cuisine.styles';

export function Cuisine() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  console.log(theme.spacing.md);

  const getChild = (height: number, width: number) => {
    return (
      <Card
        m={10}
        radius="md"
        withBorder
      >
       <Card.Section>
        <Image 
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={height}
          maw={width}
        />
       </Card.Section>
      </Card>

    )
  };
  const BASE_HEIGHT = 360;
  const BASE_WIDTH = 240;
  const getSubHeight = (children: number, spacing: number) =>
    BASE_HEIGHT / children - spacing * ((children - 1) / children);

  return (
    <MediaQuery
      smallerThan="lg"
      styles={{
        flexDirection: 'column',
      }}
    >
      <Flex className={classes.wrapper}>
        <Flex className={classes.textContainer}>
          <Text align="center" size={38} m={20}>
            Boket78 - The modern cuisine
          </Text>
          <Text size="md" align="center" maw={600}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id
            necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam
            perspiciatis excepturi iste sint itaque sunt laborum. Nihil?
          </Text>
        </Flex>
        <Flex wrap="wrap" align="center" justify="center">
          {Array.from({ length: 7 }).map((item) => {
            return getChild(BASE_HEIGHT, BASE_WIDTH);
          })}
        </Flex>
      </Flex>
    </MediaQuery>
  );
}
