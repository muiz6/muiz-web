import { Box, chakra, Text } from '@chakra-ui/react';
import React from 'react';
import { FaNodeJs, FaReact, FaStethoscope } from 'react-icons/fa';

import Container from 'components/Container';
import ServiceTile from 'components/ServiceTile';

export default function ServiceSection() {
  return (
    <chakra.section id="services" px="5" py="16">
      <Container>
        <Text fontSize="5xl" fontWeight="700">My Services</Text>
        <Text fontSize="xl" mb="10">Services I provide for my clients</Text>
        <Box d={{ md: 'flex' }} m="-3">
          <Box d={{ md: 'flex' }} p="3" w={{ md: '33.33%' }}>
            <ServiceTile
              description="Build a fast responsive website for your business."
              Icon={FaReact}
              title="Build Website"
            />
          </Box>
          <Box d={{ md: 'flex' }} p="3" w={{ md: '33.33%' }}>
            <ServiceTile
              description="Build a REST or GraphQL API for your applications."
              Icon={FaNodeJs}
              title="Build API"
            />
          </Box>
          <Box d={{ md: 'flex' }} p="3" w={{ md: '33.33%' }}>
            <ServiceTile
              description="Debug or take over existing projects."
              Icon={FaStethoscope}
              title="Debug"
            />
          </Box>
        </Box>
      </Container>
    </chakra.section>
  );
}
