import {
  Box, Center, Icon as ChakraIcon, Text,
} from '@chakra-ui/react';
import React from 'react';

export default function ServiceTile({ description, Icon, title }) {
  return (
    <Box bgColor="primaryVariant" borderRadius="3xl" pb="20" pt="24" px="10">
      <Center bgColor="secondary" borderRadius="50%" h="75px" w="75px">
        <ChakraIcon as={Icon} color="onSecondary" fontSize="42px" />
      </Center>
      <Text fontSize="4xl" fontWeight="700" mt="3">{title}</Text>
      <Text fontSize="xl">{description}</Text>
      <Box bgColor="onPrimary" h="1" mt="10" w="80px" />
    </Box>
  );
}
