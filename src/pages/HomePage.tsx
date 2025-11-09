import { Box, Heading, Text } from '@chakra-ui/react'

export function HomePage() {
  return (
    <Box p={8}>
      <Heading size="2xl" mb={4}>
        Welcome to Splitwise Clone
      </Heading>
      <Text fontSize="lg" color="gray.600">
        Split expenses with friends and family
      </Text>
    </Box>
  )
}
