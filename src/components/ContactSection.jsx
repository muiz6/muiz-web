import {
  Box, chakra, Text, Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { useState } from 'react';

import Container from 'components/Container';
import FormInput from 'components/FormInput';
import FormTextarea from 'components/FormTextarea';
import MyButton from 'components/MyButton';

export default function ContactSection() {
  const [formData, setFormData] = useState({});
  return (
    <chakra.section bgColor="secondary" color="onSecondary" id="contact" px="5" py="24">
      <Container d={{ md: 'flex' }}>
        <Box w={{ md: '50%' }}>
          <Box h="1" bgColor="primary" w="100px" />
          <Text fontSize="5xl">
            Interested in
            <br />
            working together?
            <br />
            Let's talk
          </Text>
        </Box>
        <Box w={{ md: '50%' }}>
          <FormInput
            onChange={(event) => setFormData({ ...formData, name: event.target.value })}
            placeholder="Enter your name"
          />
          <Box h="5" />
          <FormTextarea
            onChange={(event) => setFormData({ ...formData, message: event.target.value })}
            placeholder="Enter message"
          />
          <Box h="5" />
          <NextLink href={makeLink(formData)} passHref>
            <Link>
              <MyButton>CONTACT ME</MyButton>
            </Link>
          </NextLink>
        </Box>
      </Container>
    </chakra.section>
  );
}

function makeLink(formData) {
  return 'mailto:muizhassan83@gmail.com?'
    + `subject=${formData.name ?? ''} | Hey Muiz`
    + `&body=${formData.message ?? ''}`
    + '%0D%0A%0D%0A'
    + `From ${formData.name ?? ''}`;
}
