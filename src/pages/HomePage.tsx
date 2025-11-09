import { Box, Card, Heading, Text, VStack, Flex } from '@chakra-ui/react'
import { ColorModeButton } from '@/components/ui/color-mode'

export function HomePage() {
  return (
    <Box minH="100vh" bg="bg" color="fg">
      <VStack p={8} gap={6} align="stretch" maxW="4xl" mx="auto">
        <Flex justify="space-between" align="center">
          <Box>
            <Heading size="2xl" mb={4}>
              Welcome to Splitwise Clone
            </Heading>
            <Text fontSize="lg" color="fg.muted">
              Split expenses with friends and family
            </Text>
          </Box>
          <ColorModeButton />
        </Flex>

        <Card.Root>
          <Card.Body>
            <Heading size="lg" mb={2}>
              Get Started
            </Heading>
            <Text color="fg.muted">
              This app automatically adapts to your system's light or dark theme preference.
            </Text>
          </Card.Body>
        </Card.Root>
      </VStack>
    </Box>
  )
}
