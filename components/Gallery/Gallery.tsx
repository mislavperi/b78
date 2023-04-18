import { Flex, Grid, Skeleton, Container, Text } from '@mantine/core';

const child = () => <Skeleton height={320} radius="md" animate={false} />;

export function Gallery() {
  return (
    <Flex w="100%" direction="column" bg="#659499">
      <Text align="center" size={48} color="white" m={20} weight={500}>Sample text goes here</Text>
      <Container my="md" fluid w="100%">
        <Grid>
          <Grid.Col xs={4}>{child()}</Grid.Col>
          <Grid.Col xs={8}>{child()}</Grid.Col>
          <Grid.Col xs={8}>{child()}</Grid.Col>
          <Grid.Col xs={4}>{child()}</Grid.Col>
          <Grid.Col xs={3}>{child()}</Grid.Col>
          <Grid.Col xs={3}>{child()}</Grid.Col>
          <Grid.Col xs={6}>{child()}</Grid.Col>
          <Grid.Col xs={4}>{child()}</Grid.Col>
          <Grid.Col xs={8}>{child()}</Grid.Col>
          <Grid.Col xs={8}>{child()}</Grid.Col>
          <Grid.Col xs={4}>{child()}</Grid.Col>
          <Grid.Col xs={3}>{child()}</Grid.Col>
          <Grid.Col xs={3}>{child()}</Grid.Col>
          <Grid.Col xs={6}>{child()}</Grid.Col>
          <Grid.Col xs={4}>{child()}</Grid.Col>
          <Grid.Col xs={8}>{child()}</Grid.Col>
          <Grid.Col xs={8}>{child()}</Grid.Col>
          <Grid.Col xs={4}>{child()}</Grid.Col>
          <Grid.Col xs={3}>{child()}</Grid.Col>
          <Grid.Col xs={3}>{child()}</Grid.Col>
          <Grid.Col xs={6}>{child()}</Grid.Col>
          <Grid.Col xs={4}>{child()}</Grid.Col>
          <Grid.Col xs={8}>{child()}</Grid.Col>
          <Grid.Col xs={8}>{child()}</Grid.Col>
          <Grid.Col xs={4}>{child()}</Grid.Col>
          <Grid.Col xs={3}>{child()}</Grid.Col>
          <Grid.Col xs={3}>{child()}</Grid.Col>
          <Grid.Col xs={6}>{child()}</Grid.Col>
        </Grid>
      </Container>
    </Flex>
  );
}
