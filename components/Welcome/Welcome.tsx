import { Flex, BackgroundImage, Text } from '@mantine/core';

import React from 'react';
import Image from 'next/image';

import logo from '../../public/assets/sized.webp';

export function Welcome() {
  return (
    <BackgroundImage src="/assets/landing.webp" h="100vh">
      <Flex align="center" h="100vh" direction="column">
        <Image src={logo} alt="Boket 78 logo" width={300} style={{ marginTop: -110 }} />
        <Flex h="100vh" align="center">
          {/* @ts-ignore */}
          <Text size="calc(46px + 0.390625vw)" mt="-220px" weight={300} align="center!important">
            Food for your island mood
          </Text>
        </Flex>
      </Flex>
    </BackgroundImage>
  );
}
