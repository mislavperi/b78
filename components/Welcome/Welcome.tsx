import { Container, Image } from '@mantine/core';
import { useState, useEffect } from 'react';

export function Welcome() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => setVisible(!visible), 4000);
  }, [visible]);

  return (
    <Container fluid m={0} p={0} pos="relative" id="landing">
      <Image src="/assets/landing.jpg" height="100vh" style={{ filter: 'brightness(50%);' }} />
      <Image
        src="/assets/logo.png"
        pos="absolute"
        top="50%"
        left="50%"
        width={600}
        ml={-300}
        mt={-300}
        style={{
          opacity: visible ? 0 : 1,
          transition: '2s',
        }}
      />
      <Image
        src="/assets/illustration.png"
        pos="absolute"
        top="50%"
        left="50%"
        width={500}
        ml={-275}
        mt={-175}
        style={{
          opacity: visible ? 1 : 0,

          transition: '2s',
        }}
      />
    </Container>
  );
}
