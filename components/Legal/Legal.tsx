import { Flex, Image } from '@mantine/core';

export function Legal() {
    return (
        <Flex h="200px" wrap="wrap" align="center" justify="space-around">
            <Image
                src="/assets/hamag1.jpg"
                width="400px"
            />
            <Image
                src="/assets/eu1.jpg"
                width="400px"
            />
        </Flex>
    )
}
