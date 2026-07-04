import { Flex, BackgroundImage, Title } from '@mantine/core';

import React from 'react';
import Image from 'next/image';

import logo from '../../public/assets/sized.webp';

export function Welcome() {
  return (
    <BackgroundImage src="/assets/landing.webp" h="100vh">
      <Flex align="center" justify="center" h="100vh" direction="column" gap="md">
        <Image src={logo} alt="Boket78 restaurant logo" width={300} priority />
        <Title
          order={1}
          color="white"
          weight={300}
          align="center"
          sx={{ fontSize: 'calc(46px + 0.390625vw)' }}
        >
          Food for your island mood
        </Title>
      </Flex>
    </BackgroundImage>
  );
}
