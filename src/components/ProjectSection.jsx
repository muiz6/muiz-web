import {
  Box, chakra, Link, Text,
} from '@chakra-ui/react';
import React from 'react';

import Container from 'components/Container';
import * as images from 'images';

export default function ProjectSection() {
  return (
    <chakra.section id="projects" px="5" py="16">
      <Container>
        <Text fontSize="5xl" fontWeight="700">My Portfolio</Text>
        <Text fontSize="xl" mb="10">Take a look at the latest projects I’ve done</Text>
        <Box d={{ md: 'flex' }} m="-3">
          <Box w={{ md: '25%' }}>
            <Box p="3">
              <Link href="https://github.com/muiz6/android-music-player">
                <Box
                  bgColor="gray.400"
                  bgImage={`url(${images.musicPlayer})`}
                  bgPos="top center"
                  bgSize="cover"
                  h={{ base: '250px', md: '240px' }}
                />
              </Link>
            </Box>
            <Box p="3">
              <Box
                bgColor="gray.400"
                bgImage={`url(${images.node})`}
                bgPos="center"
                bgSize="cover"
                h={{ base: '250px', md: '240px' }}
              />
            </Box>
          </Box>
          <Box w={{ md: '25%' }}>
            <Box p="3">
              <Link href="https://github.com/muiz6/video_player">
                <Box
                  bgImage={`url(${images.videoPlayer})`}
                  bgPos="center"
                  bgSize="cover"
                  bgColor="gray.400"
                  h={{ base: '250px', md: '300px' }}
                />
              </Link>
            </Box>
            <Box p="3">
              <Box
                bgColor="gray.400"
                bgImage={`url(${images.graphQl})`}
                bgPos="center"
                bgSize="cover"
                h={{ base: '250px', md: '180px' }}
              />
            </Box>
          </Box>
          <Box w={{ md: '50%' }}>
            <Box p="3">
              <Link href="https://github.com/muiz6/gainimpact-chat">
                <Box
                  bgColor="gray.400"
                  bgImage={`url(${images.gainImpact})`}
                  bgPos="center"
                  bgSize="cover"
                  h={{ base: '250px', md: '500px' }}
                />
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </chakra.section>
  );
}
