import { chakra } from '@chakra-ui/react';
import React from 'react';

export default function MyButton({ children }) {
  return (
    <chakra.button bgColor="primary" color="onPrimary" fontSize="lg" px="5" py="2">
      {children}
    </chakra.button>
  );
}
