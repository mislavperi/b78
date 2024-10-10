import { BackgroundImage, Flex, Container, Text, Anchor, Image } from '@mantine/core';
import {
  IconBrandTripadvisor,
  IconBrandFacebook,
  IconBrandInstagram,
  IconPhone,
  IconMail,
} from '@tabler/icons-react';

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
      name: 'Call is to book a table',
      link: 'tel:+385995935023',
      icon: <IconPhone color="white" size={24} />,
    },
    {
      name: 'Send us an email to book a table',
      link: 'mailto:info@boket78.com',
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
                <a href={social.link} target="_blank">
                  <Flex
                    align="center"
                    style={{
                      border: '1px solid white',
                      padding: '5px',
                      borderRadius: '15%',
                    }}
                  >
                    {social.icon}
                  </Flex>
                </a>
              );
            })}
          </Flex>
        </Container>
        <Text>Ul. Radića Frane 14</Text>
        <Text>Closed for the season. Thank you!</Text>
      </Flex>
    </BackgroundImage>
  );
}
