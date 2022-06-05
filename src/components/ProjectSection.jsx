import { Box, chakra, Text } from '@chakra-ui/react';
import React from 'react';

import Container from 'components/Container';

export default function ProjectSection() {
  return (
    <chakra.section px="5" py="16">
      <Container>
        <Text fontSize="5xl" fontWeight="700">My Portfolio</Text>
        <Text fontSize="xl" mb="10">Take a look at the latest projects I’ve done</Text>
        <Box d={{ md: 'flex' }} m="-3">
          <Box w={{ md: '25%' }}>
            <Box p="3">
              <Box bgColor="gray.400" h={{ base: '300px', md: '240px' }} />
            </Box>
            <Box p="3">
              <Box bgColor="gray.400" h={{ base: '300px', md: '240px' }} />
            </Box>
          </Box>
          <Box w={{ md: '25%' }}>
            <Box p="3">
              <Box bgColor="gray.400" h={{ base: '300px', md: '300px' }} />
            </Box>
            <Box p="3">
              <Box bgColor="gray.400" h={{ base: '300px', md: '180px' }} />
            </Box>
          </Box>
          <Box w={{ md: '50%' }}>
            <Box p="3">
              <Box bgColor="gray.400" h={{ base: '300px', md: '500px' }} />
            </Box>
          </Box>
        </Box>
      </Container>
    </chakra.section>
  );
}
