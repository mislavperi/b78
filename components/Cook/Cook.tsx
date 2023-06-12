import { Flex, Image, Text, MediaQuery } from '@mantine/core';

export function Cook() {
  return (
    <Flex h="100vh">
      <MediaQuery
        smallerThan="md"
        styles={{ 
          background: `url('assets/marko_darken.webp')`,
          width: '100%',
          height: '100%',
          backgroundSize: "cover",
         }}
      >
      <Flex
        w="65%"
        direction="column"
        justify="center"
        sx={{ background: '#02323C' }}
      >
        {/* @ts-ignore */}
        <Text size="calc(36px + 0.390625vw)" my={20} mx={40} align="end!important">
          Chef Marko Marijanović
        </Text>
        {/* @ts-ignore */}
        <Text align="end!important" size="calc(20px + 0.390625vw)" mx={40}>
        Experience the culinary brilliance of our highly skilled chef, who brings years of expertise to every meal. Prepare to be amazed by the splendid dishes created with a perfect balance of flavors and artistic presentation. Join us for a remarkable dining experience that showcases the culinary mastery of our talented chef.
        </Text>
      </Flex>
      </MediaQuery>

      <MediaQuery smallerThan="md" styles={{width:"0%"}}>
      <Flex w="35%" m={0} p={0} >
        <Image src="/assets/marko.webp" height="100vh" />
      </Flex>
      </MediaQuery>
    </Flex>
  );
}
