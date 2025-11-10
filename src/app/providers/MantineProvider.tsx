import { MantineProvider as BaseMantineProvider, createTheme } from '@mantine/core'
import { type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const theme = createTheme({
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  primaryColor: 'blue',
  defaultRadius: 'md',
  breakpoints: {
    xs: '36em',
    sm: '48em',
    md: '62em',
    lg: '75em',
    xl: '88em',
  },
})

export function MantineProvider({ children }: Props) {
  return (
    <BaseMantineProvider theme={theme}>
      {children}
    </BaseMantineProvider>
  )
}
