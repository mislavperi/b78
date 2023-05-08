import {
  Container,
  Affix,
  Transition,
  MediaQuery,
  Button,
  rem,
  keyframes,
  createStyles,
  Image as MantineImage,
} from '@mantine/core';
import { useState, useEffect } from 'react';
import { useWindowScroll } from '@mantine/hooks';
import { IconArrowUp, IconArrowDown } from '@tabler/icons-react';
import Image from 'next/image';

import illustration from '../../public/assets/illustration.webp';
import logo from '../../public/assets/logo (1).webp';

export function Welcome() {
  const [scroll, scrollTo] = useWindowScroll();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => setVisible(!visible), 4000);
  }, [visible]);

  const bounce = keyframes({
    'from, 20%, 53%, 80%, to': { transform: 'translate3d(0, 0, 0)' },
    '40%, 43%': { transform: 'translate3d(0, -1.875rem, 0)' },
    '70%': { transform: 'translate3d(0, -0.9375rem, 0)' },
    '90%': { transform: 'translate3d(0, -0.25rem, 0)' },
  });

  const useStyles = createStyles((theme) => ({
    container: {
      animation: `${bounce} 2s ease-in-out infinite`,
    },
  }));

  const { classes } = useStyles();

  return (
    <Container fluid m={0} p={0} pos="relative" id="landing" bg="#659499" maw="100vw">
      <Container fluid pos="absolute" bottom={0} left="50%" style={{ zIndex: 60 }} ml={-20}>
        <IconArrowDown size={40} color="white" className={classes.container} />
      </Container>
      <MantineImage
        src="/assets/landing (1).webp"
        height="100vh"
        style={{ filter: 'brightness(50%);' }}
      />
      <MediaQuery
        smallerThan="md"
        styles={{
          width: 400,
          height: "auto",
          marginLeft: "-200px !important",
          marginTop: "-200px !important",
        }}
      >
        <Image
          alt="boket78 logo"
          src={logo}
          width={500}
          style={{
            marginLeft: -250,
            marginTop: -250,
            top: '50%',
            left: '50%',
            opacity: visible ? 1 : 0,
            transition: '2s',
            position: 'absolute',
          }}
        />
      </MediaQuery>
      <MediaQuery
        smallerThan="md"
        styles={{
          width: 300,
          height: "auto",
          marginLeft: "-150px !important",
          marginTop: "-100px !important",
        }}
      >
        <Image
          alt="boket78 illustration"
          src={illustration}
          width={500}
          style={{
            marginLeft: -250,
            marginTop: -200,
            top: '50%',
            left: '50%',
            opacity: visible ? 0 : 1,
            transition: '2s',
            position: 'absolute',
          }}
        />
      </MediaQuery>

      <Affix position={{ bottom: rem(20), right: rem(20) }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftIcon={<IconArrowUp size="1rem" />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Return to top
            </Button>
          )}
        </Transition>
      </Affix>
    </Container>
  );
}
