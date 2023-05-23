import { Flex, BackgroundImage, Container, Text, Anchor } from '@mantine/core';

import React from 'react';
import Image from 'next/image';

import illustration from '../../public/assets/illustration.webp';
import logo from '../../public/assets/sized.webp';

export function Welcome() {
  return (
    <BackgroundImage src="/assets/landing.webp" h="100vh">
      <Flex justify="center">
        <Image src={logo} alt="Boket 78 logo" width={300} style={{ marginTop: -110 }} />
      </Flex>
      <Container pos="absolute" fluid right={0} top={0} m={25}>
        <Anchor size={20} weight={100}>Book a table</Anchor>
      </Container>
    </BackgroundImage>
  );
}
