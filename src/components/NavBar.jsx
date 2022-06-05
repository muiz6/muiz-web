import { chakra, Icon } from '@chakra-ui/react';
import React from 'react';
import { BsApp } from 'react-icons/bs';

import Container from 'components/Container';
import NavMenu from 'components/NavMenu';

export default function NavBar() {
  return (
    <chakra.nav px="5">
      <Container alignItems="center" d="flex" justifyContent="space-between" py="2">
        <Icon as={BsApp} fontSize="64px" />
        <NavMenu />
      </Container>
    </chakra.nav>
  );
}
