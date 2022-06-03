import { Box, chakra, Text } from '@chakra-ui/react';
import React from 'react';

import Container from 'components/Container';
import FormInput from './FormInput';

export default function ContactSection() {
  return (
    <chakra.section bgColor="secondary" color="onSecondary" d="flex" py="24">
      <Container d={{ md: 'flex' }}>
        <Box w="50%">
          <Box h="1" bgColor="primary" w="100px" />
          <Text fontSize="52px">
            Interested in
            <br />
            working together?
            <br />
            Let's talk
          </Text>
        </Box>
        <Box w="50%">
          <FormInput placeholder="Enter your name" />
          <FormInput />
        </Box>
      </Container>
    </chakra.section>
  );
}
