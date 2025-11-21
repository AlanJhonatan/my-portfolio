'use client'

import { ExperiencesSection } from '@/features/home/components/experiences-section';
import Summary from '@/markdown/summary.md';
import { Avatar, Box, Card, Container, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box minHeight={"100vh"}>
      <Container maxWidth={{ sm: '100%', lg: '700px' }} pt={8}>
        <VStack>
          <Box mb={4} w={'100%'}>
            <Card.Root padding={6}>
              <HStack justifyContent={'flex-start'} gap={8}>
                <Box display={{ sm: 'none', md: 'none', lg: 'block' }}>
                  <Avatar.Root width={100} height={100}>
                    <Avatar.Image src='/alan-cropped-circle.png' alt={`Alan's Profile Image`} />
                    <Avatar.Fallback name='Alan França' />
                  </Avatar.Root>
                </Box>

                <Box>
                  <Heading size={'4xl'}>
                    Alan França
                  </Heading>
                  <Text textStyle={'xl'}>
                    Full Stack Developer
                  </Text>
                </Box>
              </HStack>
              <Box marginTop={6}>
                <Summary />
              </Box>
            </Card.Root>
          </Box>

          <Flex direction={'column'} align={['center', 'center', 'initial']} w={'100%'} mb={6}>
            <Box>
              <Heading mb={4} size={'2xl'}>Work Experience</Heading>
            </Box>
            <ExperiencesSection />
          </Flex>
        </VStack>
      </Container>
    </Box>
  )
}