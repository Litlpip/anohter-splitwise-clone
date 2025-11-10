import { Component, type ReactNode } from 'react'
import { Box, Title, Text, Button, Stack, Card, Code } from '@mantine/core'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
  errorInfo: { componentStack?: string } | null
}

export class AppErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    }
  }

  static getDerivedStateFromError(): Partial<State> {
    return {
      hasError: true,
    }
  }

  componentDidCatch(error: Error, errorInfo: { componentStack?: string }) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    // Set both error and errorInfo together to avoid race conditions
    this.setState({
      error,
      errorInfo,
    })
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    })
  }

  render() {
    if (this.state.hasError) {
      const isDev = import.meta.env.DEV
      const { error, errorInfo } = this.state

      return (
        <Box
          p="xl"
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Card
            shadow="md"
            padding="xl"
            radius="md"
            withBorder
            maw={800}
            w="100%"
          >
            <Stack gap="md">
              <Box>
                <Title order={1} c="red" mb="xs">
                  ⚠️ Something went wrong
                </Title>
                <Text c="dimmed">
                  An error occurred in the application. Please try reloading the page.
                </Text>
              </Box>

              {error && (
                <Card bg="red.0" padding="md" radius="sm">
                  <Text fw={600} c="red.9" mb="xs">
                    Error: {error.name}
                  </Text>
                  <Text c="red.7" size="sm">
                    {error.message}
                  </Text>
                </Card>
              )}

              {isDev && error?.stack && (
                <Box>
                  <Text fw={600} mb="xs" size="sm">
                    Stack Trace:
                  </Text>
                  <Card bg="gray.0" padding="sm" radius="sm" style={{ overflow: 'auto' }}>
                    <Code block c="gray.9" style={{ whiteSpace: 'pre-wrap', fontSize: '12px' }}>
                      {error.stack}
                    </Code>
                  </Card>
                </Box>
              )}

              {isDev && errorInfo?.componentStack && (
                <Box>
                  <Text fw={600} mb="xs" size="sm">
                    Component Stack:
                  </Text>
                  <Card bg="gray.0" padding="sm" radius="sm" style={{ overflow: 'auto' }}>
                    <Code block c="gray.9" style={{ whiteSpace: 'pre-wrap', fontSize: '12px' }}>
                      {errorInfo.componentStack}
                    </Code>
                  </Card>
                </Box>
              )}

              <Stack gap="sm">
                <Button onClick={this.handleReset} fullWidth>
                  Try Again
                </Button>
                <Button
                  onClick={() => window.location.href = '/'}
                  variant="outline"
                  fullWidth
                >
                  Go to Home
                </Button>
              </Stack>
            </Stack>
          </Card>
        </Box>
      )
    }

    return this.props.children
  }
}
