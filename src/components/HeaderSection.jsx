import { Box, chakra, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { BsChevronRight } from 'react-icons/bs';

import Container from './Container';

export default function HeaderSection() {
  return (
    <chakra.section id="header" pb="28">
      <Box bgColor="secondary" textColor="onSecondary" px="5" py="10">
        <Container d={{ xl: 'flex' }} justifyContent="end">
          <Box px="8" py="10" textAlign="center" w={{ xl: '50%' }}>
            <Text fontSize="2xl" lineHeight="2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus minus quas odit perferendis illo? Facere numquam voluptates at nisi illum quaerat quia autem itaque, eligendi nobis vero ipsum! Commodi, pariatur?
            </Text>
            <Icon as={BsChevronRight} fontSize="64px" mt="10" />
          </Box>
        </Container>
      </Box>
      <Box px="5">
        <Container position="relative">
          <Box
            bgColor="gray.400"
            height={{ base: '400px', md: '650px' }}
            mt={{ base: '24', xl: '-420px' }}
            position="relative"
            maxW={{ base: '350px', md: '570px' }}
          />
          <chakra.h1
            color="onPrimary"
            fontSize={{
              base: '5xl', sm: '7xl', md: '8xl', lg: '9xl',
            }}
            fontWeight="700"
            position={{ lg: 'absolute' }}
            bottom="0"
            left="100px"
            whiteSpace={{ lg: 'nowrap' }}
          >
            web developer
          </chakra.h1>
        </Container>
      </Box>
    </chakra.section>
  );
}
