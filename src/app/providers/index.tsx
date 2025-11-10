import { type ReactNode } from 'react'
import { MantineProvider } from './MantineProvider'

interface Props {
  children: ReactNode
}

export function Providers({ children }: Props) {
  return (
    <MantineProvider>
      {children}
    </MantineProvider>
  )
}
