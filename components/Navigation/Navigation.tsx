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
} from '@mantine/core';
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandYoutube,
  IconMenu2,
} from '@tabler/icons-react';
import { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react'

export function Navigation() {
  const [toggled, setToggled] = useState(false);

  return (
    <>
      <Container fluid pos="fixed" right={0} style={{ zIndex: 99 }}>
        <ActionIcon
          color="white"
          onClick={() => setToggled(!toggled)}
          style={{ zIndex: 99 }}
          w={92}
          h={92}
          m={30}
          bg="#B3852D"
          radius="50%"
          right={0}
        >
          <Hamburger size={32}  toggled={toggled} toggle={setToggled} color='white'/>
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
              style={{...styles, zIndex: 90}}
            >
              <Flex direction="column" w="70%" mt={90}>
                <MediaQuery
                  smallerThan="xs"
                  styles={{
                    marginLeft: 50,
                  }}
                >
                  <Text color="white" ml={100} mt={50} p={5} size={68} weight={400}>
                    Home
                  </Text>
                </MediaQuery>
                <MediaQuery
                  smallerThan="xs"
                  styles={{
                    marginLeft: 50,
                  }}
                >
                  <Text color="white" ml={100} mt={50} p={5} size={68} weight={400}>
                    About us
                  </Text>
                </MediaQuery>
                <MediaQuery
                  smallerThan="xs"
                  styles={{
                    marginLeft: 50,
                  }}
                >
                  <Text color="white" ml={100} mt={50} p={5} size={68} weight={400}>
                    Gallery
                  </Text>
                </MediaQuery>
              </Flex>
              <MediaQuery
                smallerThan="xs"
                styles={{
                  marginLeft: 50,
                }}
              >
                <Flex direction="column" w="30%">
                  <Container fluid mt={150}>
                    <Text color="white" size={32}>
                      Get in touch with us
                    </Text>
                    <Divider my="xl" />
                    <Text color="white" size="md" weight={600}>
                      boket78@gmail.com
                    </Text>
                    <SimpleGrid cols={4} my={20} breakpoints={[{ maxWidth: 'md', cols: 2 }]}>
                      <ActionIcon color="white" size="lg">
                        <IconBrandFacebook color="white" />
                      </ActionIcon>
                      <ActionIcon color="white" size="lg">
                        <IconBrandInstagram color="white" />
                      </ActionIcon>
                      <ActionIcon color="white" size="lg">
                        <IconBrandTwitter color="white" />
                      </ActionIcon>
                      <ActionIcon color="white" size="lg">
                        <IconBrandYoutube color="white" />
                      </ActionIcon>
                    </SimpleGrid>
                  </Container>
                </Flex>
              </MediaQuery>
            </Flex>
          </MediaQuery>
        )}
      </Transition>
    </>
  );
}
