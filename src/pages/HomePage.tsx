import { Box, Card, Title, Text, Stack, Flex, Loader } from '@mantine/core'
import { ColorModeButton } from '@/components/ui/color-mode'
import { useCurrentUser } from '@/features/auth/hooks/useCurrentUser'

export function HomePage() {
  const { data: user, isLoading } = useCurrentUser()

  return (
    <Box style={{ minHeight: '100vh' }} p="md">
      <Stack gap="xl" maw="4xl" mx="auto">
        <Flex justify="space-between" align="center">
          <Box>
            <Title order={1} mb="md">
              {isLoading ? (
                <Flex align="center" gap="sm">
                  <Loader size="sm" />
                  <Text>Загрузка...</Text>
                </Flex>
              ) : (
                `Привет, ${user?.name || 'Пользователь'}`
              )}
            </Title>
            <Text size="lg" c="dimmed">
              Split expenses with friends and family
            </Text>
          </Box>
          <ColorModeButton />
        </Flex>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Title order={2} mb="xs">
            Get Started
          </Title>
          <Text c="dimmed">
            This app automatically adapts to your system's light or dark theme preference.
          </Text>
        </Card>
      </Stack>
    </Box>
  )
}
