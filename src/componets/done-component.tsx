import { CheckCircleIcon } from '@chakra-ui/icons';
import { Box, FormControl, FormLabel, Heading, Input, Text  } from '@chakra-ui/react';
import React from 'react';

export const Success = () => {

    return (
        <Box textAlign="center" py={10} px={6}>
            <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
            <Heading as="h2" size="xl" mt={6} mb={2}>
                This is the headline
            </Heading>
            <Text >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua.
            </Text>
        </Box>
    );
}