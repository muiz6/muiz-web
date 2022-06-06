import { Box, chakra, Icon } from '@chakra-ui/react';
import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { RiMailLine } from 'react-icons/ri';

import Container from 'components/Container';
import NavMenu from 'components/NavMenu';

export default function FooterSection() {
  return (
    <chakra.footer px="5" py="10">
      <Container d="flex" justifyContent={{ base: 'end', md: 'space-between' }}>
        <Box display={{ base: 'none', md: 'block' }}>
          <NavMenu />
        </Box>
        <chakra.ul d="flex" mx="-3">
          <chakra.li px="3">
            <chakra.a href="mailto:muizhassan83@gmail.com">
              <Icon as={RiMailLine} fontSize="32px" />
            </chakra.a>
          </chakra.li>
          <chakra.li px="3">
            <chakra.a href="https://www.linkedin.com/in/muiz6">
              <Icon as={FaLinkedinIn} fontSize="32px" />
            </chakra.a>
          </chakra.li>
          <chakra.li px="3">
            <chakra.a href="https://www.github.com/muiz6">
              <Icon as={FaGithub} fontSize="32px" />
            </chakra.a>
          </chakra.li>
        </chakra.ul>
      </Container>
    </chakra.footer>
  );
}
