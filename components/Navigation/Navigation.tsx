import {
  Button,
  Text,
  Flex,
  MediaQuery,
  Transition,
  ActionIcon,
  SimpleGrid,
  Container,
  Divider,
  Anchor,
} from '@mantine/core';
import { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';

export function Navigation() {
  const [toggled, setToggled] = useState(false);

  return (
    <>
      <Container fluid pos="fixed" right={0} style={{ zIndex: 99 }}>
        <ActionIcon
          onClick={() => setToggled(!toggled)}
          style={{ zIndex: 99 }}
          w={64}
          h={64}
          m={15}
          radius="50%"
          right={0}
        >
          <Hamburger size={24} toggled={toggled} toggle={setToggled} color="white" />
        </ActionIcon>
      </Container>
      <Transition mounted={toggled} transition="slide-right" duration={400} timingFunction="ease">
        {(styles) => (
          <MediaQuery
            smallerThan="xs"
            styles={{
              flexDirection: 'column',
              height: '100vh',
            }}
          >
            <Flex
              h="100%"
              w="100%"
              bg="#659499"
              direction="row"
              pos="fixed"
              top={0}
              style={{ ...styles, zIndex: 90 }}
            >
              <Flex direction="column" w="70%" mt={90}>
                <MediaQuery
                  smallerThan="xs"
                  styles={{
                    marginLeft: 50,
                  }}
                >
                  <Anchor
                    ml={100}
                    mt={50}
                    p={5}
                    size={68}
                    weight={400}
                    href="#landing"
                    onClick={() => setToggled(false)}
                  >
                    Home
                  </Anchor>
                </MediaQuery>
                <MediaQuery
                  smallerThan="xs"
                  styles={{
                    marginLeft: 50,
                  }}
                >
                  <Anchor
                    ml={100}
                    mt={50}
                    p={5}
                    size={58}
                    weight={400}
                    href="#about"
                    onClick={() => setToggled(false)}
                  >
                    About us
                  </Anchor>
                </MediaQuery>
                <MediaQuery
                  smallerThan="xs"
                  styles={{
                    marginLeft: 50,
                  }}
                >
                  <Anchor
                    ml={100}
                    mt={50}
                    p={5}
                    size={58}
                    weight={400}
                    href="#menu"
                    onClick={() => setToggled(false)}
                  >
                    Menu
                  </Anchor>
                </MediaQuery>
                <MediaQuery
                  smallerThan="xs"
                  styles={{
                    marginLeft: 50,
                  }}
                >
                  <Anchor
                    ml={100}
                    mt={50}
                    p={5}
                    size={68}
                    weight={400}
                    href="#contact"
                    onClick={() => setToggled(false)}
                  >
                    Contact us
                  </Anchor>
                </MediaQuery>
              </Flex>
            </Flex>
          </MediaQuery>
        )}
      </Transition>
    </>
  );
}
