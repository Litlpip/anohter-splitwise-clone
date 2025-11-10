import { type ReactNode } from 'react'
import { MantineProvider } from './MantineProvider'
import { QueryProvider } from './QueryProvider'

interface Props {
  children: ReactNode
}

export function Providers({ children }: Props) {
  return (
    <QueryProvider>
      <MantineProvider>
        {children}
      </MantineProvider>
    </QueryProvider>
  )
}
