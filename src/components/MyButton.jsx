import { chakra } from '@chakra-ui/react';
import React from 'react';

export default function MyButton({ children }) {
  return (
    <chakra.button
      color="onSecondary"
      borderColor="onSecondary"
      border="2px solid"
      fontSize="lg"
      fontWeight="700"
      px="7"
      py="3"
      _hover={{
        bgColor: 'primary',
        color: 'onPrimary',
        borderColor: 'primary',
      }}
    >
      {children}
    </chakra.button>
  );
}
