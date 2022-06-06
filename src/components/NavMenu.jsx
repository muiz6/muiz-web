import { chakra } from '@chakra-ui/react';
import React from 'react';

export default function NavMenu() {
  return (
    <chakra.ul d="flex" fontSize="xl" mx="-3">
      <chakra.li px="3">
        <chakra.a href="#header">Home</chakra.a>
      </chakra.li>
      <chakra.li px="3">
        <chakra.a href="#services">Services</chakra.a>
      </chakra.li>
      <chakra.li px="3">
        <chakra.a href="#projects">Projects</chakra.a>
      </chakra.li>
      <chakra.li px="3">
        <chakra.a href="#contact">Contact</chakra.a>
      </chakra.li>
    </chakra.ul>
  );
}
