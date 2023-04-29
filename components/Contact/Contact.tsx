import { Flex, Text, Container, Anchor } from '@mantine/core';

export function Contact() {

  const socials = [
    {
      name: "Facebook",
      link: "",
    },
    {
      name: "Twitter",
      link: "",
    },
  ]

  return (
    <Flex h="100vh" direction="column" align="center" justify="center" id="contact" bg="#659499" >
      <Text size={48}>Get in touch with us</Text>
      <Container>
        {socials.map(social => {
          return (
            <Anchor p={15} >{social.name}</Anchor>
          )
        })}
      </Container>
    </Flex>
  );
}
