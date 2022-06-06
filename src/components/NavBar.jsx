import { Box, chakra, Icon } from '@chakra-ui/react';
import React from 'react';
import { BsBox } from 'react-icons/bs';

import Container from 'components/Container';
import NavMenu from 'components/NavMenu';

export default function NavBar() {
  return (
    <chakra.nav px="5">
      <Container alignItems="center" d="flex" justifyContent="space-between" py="5">
        <Icon as={BsBox} fontSize="42px" />
        <Box display={{ base: 'none', md: 'block' }}>
          <NavMenu />
        </Box>
      </Container>
    </chakra.nav>
  );
}
