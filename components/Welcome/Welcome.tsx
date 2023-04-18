import { Container } from '@mantine/core';
import useStyles from './Welcome.styles';
import { useEffect, useRef } from 'react';

export function Welcome() {
  const { classes } = useStyles();

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <Container className={classes.videoContainer} fluid>
      <video ref={videoRef} autoPlay muted loop playsInline className={classes.video}>
        <source src="/assets/b78.mp4" type="video/mp4" />
      </video>
    </Container>
  );
}
