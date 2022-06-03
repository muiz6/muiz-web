import { chakra } from '@chakra-ui/react';
import React from 'react';

export default function FormInput({ placeholder }) {
  return (
    <chakra.input
      bgColor="transparent"
      borderBottom="2px solid"
      borderColor="primary"
      d="block"
      placeholder={placeholder}
      _placeholder={{
        color: 'onSecondary',
        paddingBottom: '5',
      }}
    />
  );
}
