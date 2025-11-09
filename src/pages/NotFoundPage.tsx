import { Box, Heading, Text, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <Box p={8} textAlign="center">
      <Heading size="3xl" mb={4}>
        404
      </Heading>
      <Text fontSize="xl" color="gray.600" mb={6}>
        Page not found
      </Text>
      <Button onClick={() => navigate('/')}>
        Go Home
      </Button>
    </Box>
  )
}
