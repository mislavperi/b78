import { BackgroundImage, Flex, Container, Text, Image, Title } from '@mantine/core';
import {
  IconBrandTripadvisor,
  IconBrandFacebook,
  IconBrandInstagram,
  IconPhone,
  IconMail,
} from '@tabler/icons-react';
import { trackClick } from '../../lib/gtag';

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
      name: 'Call us to book a table',
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
    <BackgroundImage src="/assets/contact.webp" mih="100vh">
      <Flex w="100%" direction="column" align="center" justify="center" mih="100vh" py={60}>
        <Image src="/assets/illustration.webp" alt="Boket78 illustration" maw={500} />
        <Container fluid>
          <Title order={2} color="white" ml={10} sx={{ fontSize: 'calc(28px + 0.390625vw)' }}>
            Get in touch with us
          </Title>
          <Flex justify="space-around" wrap="wrap" gap="md" m={30}>
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                onClick={() => trackClick(`contact:${social.name}`, 'contact')}
              >
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
            ))}
          </Flex>
        </Container>
        <Text>Ul. Radića Frane 14, 21420 Bol, Brač</Text>
        <Text>Open 12PM – 12AM</Text>
      </Flex>
    </BackgroundImage>
  );
}
