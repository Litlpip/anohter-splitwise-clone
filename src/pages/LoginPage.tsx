import { Box, Card, Title, TextInput, PasswordInput, Button, Stack, Text, Anchor, Alert } from '@mantine/core'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ROUTES } from '@/lib/constants'
import { loginSchema, type LoginFormData } from '@/features/auth/schemas/loginSchema'
import { useLogin } from '@/features/auth/hooks/useLogin'

export function LoginPage() {
  const { mutate: login, isPending, error } = useLogin()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: LoginFormData) => {
    login(data)
  }

  return (
    <Box
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      p="md"
    >
      <Card
        shadow="md"
        padding="xl"
        radius="md"
        withBorder
        w="100%"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap="lg">
            <Box ta="center">
              <Title order={2} mb="xs">
                Welcome back
              </Title>
              <Text size="sm" c="dimmed">
                Sign in to your account to continue
              </Text>
            </Box>

            {error && (
              <Alert color="red" title="Login failed">
                {error.message || 'An error occurred during login'}
              </Alert>
            )}

            <Stack gap="md">
              <TextInput
                label="Login"
                placeholder="Login"
                defaultValue={'Ramir'}
                type="text"
                error={errors.username?.message}
                {...register('username')}
              />

              <PasswordInput
                label="Password"
                placeholder="Your password"
                defaultValue={'A123456'}
                error={errors.password?.message}
                {...register('password')}
              />

              <Button fullWidth size="md" type="submit" loading={isPending}>
                Sign in
              </Button>
            </Stack>

            <Text size="sm" ta="center" c="dimmed">
              Don't have an account?{' '}
              <Anchor component={Link} to={ROUTES.HOME} size="sm">
                Sign up
              </Anchor>
            </Text>
          </Stack>
        </form>
      </Card>
    </Box>
  )
}
