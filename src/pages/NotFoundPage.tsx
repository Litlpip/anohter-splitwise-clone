import { Box, Title, Text, Button } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

export function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <Box p="xl" ta="center">
      <Title order={1} size="4rem" mb="md">
        404
      </Title>
      <Text size="xl" c="dimmed" mb="xl">
        Page not found
      </Text>
      <Button onClick={() => navigate('/')}>
        Go Home
      </Button>
    </Box>
  )
}
