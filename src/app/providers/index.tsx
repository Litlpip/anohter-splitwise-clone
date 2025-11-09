import { type ReactNode } from 'react'
import { ChakraProvider } from './ChakraProvider'

interface Props {
  children: ReactNode
}

export function Providers({ children }: Props) {
  return (
    <ChakraProvider>
      {children}
    </ChakraProvider>
  )
}
