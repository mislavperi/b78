import { Flex, Text, Title } from '@mantine/core';

export function Info() {
  const details = [
    { label: 'Company', value: 'MORE BEER d.o.o.' },
    { label: 'Address', value: 'Ulica Frane Radića 14, 21420 Bol' },
    { label: 'OIB', value: '66779892111' },
    { label: 'Director', value: 'Danijel Čamber' },
    { label: 'IBAN', value: 'HR5024070001100207879' },
  ];

  return (
    <Flex
      bg="#02323C"
      mih="100vh"
      direction="column"
      align="center"
      justify="center"
      gap="sm"
      py={80}
      px={20}
    >
      <Title order={1} color="white" mb="lg" align="center">
        Company Information
      </Title>
      {details.map((detail) => (
        <Text key={detail.label} align="center">
          <strong>{detail.label}:</strong> {detail.value}
        </Text>
      ))}
    </Flex>
  );
}
