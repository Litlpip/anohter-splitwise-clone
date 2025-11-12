import { Card, Title, Text, Stack, Flex, Loader } from '@mantine/core'
import { useCurrentUser } from '@/features/auth/hooks/useCurrentUser'

export function HomePage() {
  const { data: user, isLoading } = useCurrentUser()

  return (
    <Stack gap="lg">
      <Title order={1}>
        {isLoading ? (
          <Flex align="center" gap="sm">
            <Loader size="sm" />
            <Text>Загрузка...</Text>
          </Flex>
        ) : (
          `Привет, ${user?.name || 'Пользователь'}`
        )}
      </Title>

      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Title order={2} mb="xs">
          Добро пожаловать
        </Title>
        <Text c="dimmed">
          Split expenses with friends and family
        </Text>
      </Card>
    </Stack>
  )
}
