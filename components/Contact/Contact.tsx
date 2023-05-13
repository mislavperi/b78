import {
  Flex,
  Text,
  Container,
  Anchor,
  Divider,
  Button,
  Modal,
  TextInput,
  Group,
  Select,
  Title,
  MediaQuery,
  SimpleGrid,
  BackgroundImage,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import {
  IconBrandTripadvisor,
  IconBrandFacebook,
  IconBrandInstagram,
  IconPhone,
  IconMail,
} from '@tabler/icons-react';

const containerStyle = {
  width: 'auto',
  height: '500px',
};

const center = {
  lat: 43.26176183813985,
  lng: 16.656193687625972,
};

export function Contact() {
  const form = useForm({
    initialValues: {
      email: '',
      number: '',
      fName: '',
      lName: '',
      nPeople: '',
      position: 'Inside',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });
  const [opened, { open, close }] = useDisclosure(false);
  const socials = [
    {
      name: 'Like us on Facebook',
      link: 'https://www.facebook.com/boket78/',
      icon: <IconBrandFacebook color="white" />,
    },
    {
      name: 'Follow us on Instagram',
      link: 'https://www.instagram.com/boket78.bol/',
      icon: <IconBrandInstagram color="white" />,
    },
    {
      name: 'Leave a review on Tripadvisor',
      link: 'https://www.tripadvisor.com/Restaurant_Review-g303802-d24138556-Reviews-Boket78-Bol_Brac_Island_Split_Dalmatia_County_Dalmatia.html',
      icon: <IconBrandTripadvisor color="white" />,
    },
  ];

  return (
    <BackgroundImage src="/assets/contact.webp">
      <Flex h="100vh" align="center" justify="center" id="contact" direction="column">
        <SimpleGrid cols={3} w="100%" style={{ gap: 0 }} mih="500px" breakpoints={[
            { maxWidth: "xl", cols: 2 },
            { maxWidth: "md", cols: 1 }
        ]}>
          <Container fluid m={0} p={0} miw="33%">
            <LoadScript googleMapsApiKey="AIzaSyAGqG8XNPKnYmlLzLa8MD-CxdW1q69OPbE">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={19}
                options={{
                  styles: [
                    {
                      featureType: 'all',
                      elementType: 'labels.text',
                      stylers: [
                        {
                          color: '#878787',
                        },
                      ],
                    },
                    {
                      featureType: 'all',
                      elementType: 'labels.text.stroke',
                      stylers: [
                        {
                          visibility: 'off',
                        },
                      ],
                    },
                    {
                      featureType: 'landscape',
                      elementType: 'all',
                      stylers: [
                        {
                          color: '#f9f5ed',
                        },
                      ],
                    },
                    {
                      featureType: 'road.highway',
                      elementType: 'all',
                      stylers: [
                        {
                          color: '#f5f5f5',
                        },
                      ],
                    },
                    {
                      featureType: 'road.highway',
                      elementType: 'geometry.stroke',
                      stylers: [
                        {
                          color: '#c9c9c9',
                        },
                      ],
                    },
                    {
                      featureType: 'water',
                      elementType: 'all',
                      stylers: [
                        {
                          color: '#aee0f4',
                        },
                      ],
                    },
                  ],
                }}
              ></GoogleMap>
            </LoadScript>
          </Container>
          <Container bg="#659499" fluid m={0} p={20} miw="33%">
            <Title m={10}>Get in touch with us</Title>
            <Flex direction="column">
              {socials.map((social) => {
                return (
                  <Flex align="center">
                    <Container fluid m={5} p={5} mt={12}>
                      {social.icon}
                    </Container>
                    <Anchor href={social.link}>{social.name}</Anchor>
                  </Flex>
                );
              })}
            </Flex>
          </Container>
          <Container bg="#9A6D64" fluid m={0} p={20} miw="33%">
            <Title m={10}>Book a table</Title>
            <Flex direction="column">
              <Container m={0} p={0} fluid>
                <Text ml={10}>Call us:</Text>
                <Flex align="center">
                  <Container fluid m={5} p={5} mt={12}>
                    <IconPhone color="white" />
                  </Container>
                  <Anchor href="tel:+385006077090">+395996977989</Anchor>
                </Flex>
              </Container>
              <Container m={0} p={0} fluid>
                <Text ml={10}>Send us an email:</Text>
                <Flex align="center">
                  <Container fluid m={5} p={5} mt={12}>
                    <IconMail color="white" />
                  </Container>
                  <Anchor href="mailto:mislavperic32@gmail.com">contactus@boket78.com</Anchor>
                </Flex>
              </Container>
              <Container m={0} p={0} fluid>
                <Text ml={10}>Fill out a form:</Text>
                <Button m={10} onClick={open}>
                  Book a table
                </Button>
              </Container>
            </Flex>
          </Container>
        </SimpleGrid>
        <Modal opened={opened} onClose={close} title="Book a table">
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput
              withAsterisk
              label="Email"
              placeholder="your@email.com"
              m={3}
              {...form.getInputProps('email')}
            />
            <TextInput
              withAsterisk
              label="Phone number"
              placeholder="+38xxxxxxx"
              m={3}
              {...form.getInputProps('number')}
            />
            <TextInput
              withAsterisk
              label="First name"
              placeholder="John"
              m={3}
              {...form.getInputProps('fName')}
            />
            <TextInput
              withAsterisk
              label="Last name"
              placeholder="Doe"
              m={3}
              {...form.getInputProps('lName')}
            />
            <Group position="center">
              <TextInput
                withAsterisk
                label="Number of people"
                placeholder="4"
                {...form.getInputProps('nPeople')}
                m={3}
                style={{
                  maxWidth: 'calc(50% - 1rem)',
                }}
              />
              <Select
                label="Prefered seat position"
                data={['Inside', 'Terrace', 'Walkway']}
                style={{
                  maxWidth: 'calc(50% - 1rem)',
                }}
                {...form.getInputProps('position')}
              />
            </Group>
            <Group m={4} position="right">
              <Button type="submit">Reserve a table</Button>
            </Group>
          </form>
        </Modal>
      </Flex>
    </BackgroundImage>
  );
}
