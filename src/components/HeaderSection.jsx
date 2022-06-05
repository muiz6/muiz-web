import { Box, chakra, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { BsChevronRight } from 'react-icons/bs';

import Container from './Container';

export default function HeaderSection() {
  return (
    <chakra.section id="header" pb="64">
      <Box bgColor="secondary" textColor="onSecondary" px="5" py="10">
        <Container d={{ md: 'flex' }} flexDirection="row-reverse">
          <Box px="8" py="10" textAlign="center">
            <Text fontSize="2xl" lineHeight="2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus minus quas odit perferendis illo? Facere numquam voluptates at nisi illum quaerat quia autem itaque, eligendi nobis vero ipsum! Commodi, pariatur?
            </Text>
            <Icon as={BsChevronRight} fontSize="64px" mt="10" />
          </Box>
          <Box
            bgColor="gray.400"
            flexShrink="0"
            height="650px"
            mb={{ md: '-700px' }}
            position="relative"
            w="570px"
          >
            <chakra.h1
              color="onPrimary"
              fontSize="9xl"
              fontWeight="700"
              position="absolute"
              bottom="0"
              left="100px"
              whiteSpace="nowrap"
            >
              web developer
            </chakra.h1>
          </Box>
        </Container>
      </Box>
    </chakra.section>
  );
}
