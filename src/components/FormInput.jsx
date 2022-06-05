import { chakra } from '@chakra-ui/react';
import React from 'react';

export default function FormInput({ onChange, placeholder }) {
  return (
    <chakra.input
      bgColor="transparent"
      borderBottom="3px solid"
      borderColor="primary"
      d="block"
      fontSize="lg"
      onChange={onChange}
      padding="3"
      paddingBottom="3"
      placeholder={placeholder}
      w="100%"
      _focus={{
        outline: 'none',
      }}
      _placeholder={{
        color: 'onSecondary',
        fontSize: 'lg',
      }}
    />
  );
}
