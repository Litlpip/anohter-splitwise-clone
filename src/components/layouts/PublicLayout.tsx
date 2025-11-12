import { Box, Container } from '@mantine/core'
import { type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function PublicLayout({ children }: Props) {
  return (
    <Box
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Container
        size="sm"
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
        p={0}
      >
        {children}
      </Container>
    </Box>
  )
}
