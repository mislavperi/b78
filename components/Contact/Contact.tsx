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
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';

export function Contact() {
  const form = useForm({
    initialValues: {
      email: '',
      number: '',
      fName: '',
      lName: '',
      nPeople: '',
      position: 'Inside'
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });
  const [opened, { open, close }] = useDisclosure(false);
  const socials = [
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/boket78/',
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/boket78.bol/',
    },
    {
      name: 'Tripadvisor',
      link: 'https://www.tripadvisor.com/Restaurant_Review-g303802-d24138556-Reviews-Boket78-Bol_Brac_Island_Split_Dalmatia_County_Dalmatia.html',
    },
    {
      name: 'How to get to us',
      link: 'https://goo.gl/maps/GY2NRSXsFZakga4DA?coh=178572&entry=tt',
    },
  ];

  return (
    <Flex h="100vh" direction="column" align="center" justify="center" id="contact" bg="#659499">
      <Text size={48}>Get in touch with us</Text>
      <Container>
        {socials.map((social) => {
          return <Anchor p={15} href={social.link} target="_blank">{social.name}</Anchor>;
        })}
      </Container>
      <Divider my="xs" label="Reserve a table" labelPosition="center" />
      <Flex>
        <Flex direction="column" m={5}>
          <Text m={5}>boket78@gmail.com</Text>
          <Button
            onClick={() => {
              window.location.href = 'mailto:mislavperic32@gmail.com';
            }}
          >
            Send us an email
          </Button>
        </Flex>
        <Flex direction="column" m={5}>
          <Text m={5}>099 697 7989</Text>
          <Button
            onClick={() => {
              window.location.href = 'tel:0996977989';
            }}
          >
            Call us
          </Button>
        </Flex>
      </Flex>
      <Container>
        <Button onClick={open}>Fill out a form</Button>
      </Container>
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
              data={["Inside", "Terrace", "Walkway"]}
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
  );
}
