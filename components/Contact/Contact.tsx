import { BackgroundImage, Flex, Container, Text, Anchor, Image } from '@mantine/core';
import {
  IconBrandTripadvisor,
  IconBrandFacebook,
  IconBrandInstagram,
  IconPhone,
  IconMail,
} from '@tabler/icons-react';

import illustration from '../../public/assets/illustration.webp';

export function Contact() {
  const socials = [
    {
      name: 'Like us on Facebook',
      link: 'https://www.facebook.com/boket78/',
      icon: <IconBrandFacebook color="white" size={24} />,
    },
    {
      name: 'Follow us on Instagram',
      link: 'https://www.instagram.com/boket78.bol/',
      icon: <IconBrandInstagram color="white" size={24} />,
    },
    {
      name: 'Leave a review on Tripadvisor',
      link: 'https://www.tripadvisor.com/Restaurant_Review-g303802-d24138556-Reviews-Boket78-Bol_Brac_Island_Split_Dalmatia_County_Dalmatia.html',
      icon: <IconBrandTripadvisor color="white" size={24} />,
    },
    {
      name: 'Leave a review on Tripadvisor',
      link: 'https://www.tripadvisor.com/Restaurant_Review-g303802-d24138556-Reviews-Boket78-Bol_Brac_Island_Split_Dalmatia_County_Dalmatia.html',
      icon: <IconPhone color="white" size={24} />,
    },
    {
      name: 'Leave a review on Tripadvisor',
      link: 'https://www.tripadvisor.com/Restaurant_Review-g303802-d24138556-Reviews-Boket78-Bol_Brac_Island_Split_Dalmatia_County_Dalmatia.html',
      icon: <IconMail color="white" size={24} />,
    },
  ];

  return (
    <BackgroundImage src="/assets/contact.webp" h="100vh">
      <Flex w="100vw" direction="column" align="center" justify="center" h="100vh">
      <Image src="/assets/illustration.webp" maw={500} />

        <Container fluid>
          <Text size="calc(28px + 0.390625vw)" ml={10}>
            Get in touch with us
          </Text>
          <Flex justify="space-around" m={30}>
            {socials.map((social) => {
              return (
                <Flex
                  align="center"
                  style={{
                    border: "1px solid white",
                    padding: "5px",
                    borderRadius: "15%"
                  }}
                >
                  {social.icon}
                </Flex>
              );
            })}
          </Flex>
        </Container>
        <Text>Ulica Frane Radića 3021</Text>
        <Text>Open everyday from 14h till 24h</Text>
      </Flex>
    </BackgroundImage>
  );
}
