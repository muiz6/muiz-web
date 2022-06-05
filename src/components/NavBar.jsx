import { chakra, Icon } from '@chakra-ui/react';
import React from 'react';
import { BsApp } from 'react-icons/bs';

import Container from 'components/Container';

export default function NavBar() {
  return (
    <chakra.nav px="5">
      <Container py="2">
        <Icon as={BsApp} fontSize="64px" />
      </Container>
    </chakra.nav>
  );
}
