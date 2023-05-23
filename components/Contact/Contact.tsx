import {
  BackgroundImage,
  Flex,
  TextInput,
  Group,
  Button,
  Checkbox,
  createStyles,
  rem,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { DateTimePicker } from '@mantine/dates';
import {
  IconBrandTripadvisor,
  IconBrandFacebook,
  IconBrandInstagram,
  IconPhone,
  IconMail,
} from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
  },

  input: {
    height: rem(54),
    paddingTop: rem(18),
  },

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: `calc(${theme.spacing.sm} / 2)`,
    zIndex: 1,
  },
}));

export function Contact() {
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const { classes } = useStyles();

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
    <BackgroundImage src="/assets/b3darken.webp" h="100vh">
      <Flex w="100vw">
        <form
          onSubmit={form.onSubmit((values) => console.log(values))}
          style={{ backgroundColor: 'red',  width:"50%", display: "flex" }}
        >
          <TextInput
            label="E-mail"
            placeholder="3"
            miw={200}
            classNames={classes}
          />
          <TextInput
            withAsterisk
            required={true}
            label="Phone number"
            placeholder="3"
            miw={200}
            classNames={classes}
          />
          <TextInput
            label="Number of people"
            placeholder="3"
            miw={200}
            classNames={classes}
          />
          <DateTimePicker 
            label="Pick date and time"
            miw={200}
            classNames={classes}
          />
          <Group position="right" mt="md" h="100%" m={0} p={0} mt={0}>
            <Button type="submit" h="100%">Book a table</Button>
          </Group>
        </form>
      </Flex>
    </BackgroundImage>
  );
}
