import { Flex, MediaQuery, Transition, Anchor } from '@mantine/core';
import { useState } from 'react';
import Link from 'next/link';

export function Navigation() {
  const [toggled, setToggled] = useState(false);

  return (
    <>
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
              bg="#02323C"
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
                <MediaQuery
                  smallerThan="xs"
                  styles={{
                    marginLeft: 50,
                  }}
                >
                  <Link href="/info">
                    <Anchor
                      ml={100}
                      mt={50}
                      p={5}
                      size={68}
                      weight={400}
                      href="#contact"
                      onClick={() => setToggled(false)}
                    >
                      Information
                    </Anchor>
                  </Link>
                </MediaQuery>
              </Flex>
            </Flex>
          </MediaQuery>
        )}
      </Transition>
    </>
  );
}
