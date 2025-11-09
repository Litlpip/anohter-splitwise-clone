import { ChakraProvider as BaseChakraProvider, defaultSystem } from '@chakra-ui/react'
import { type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function ChakraProvider({ children }: Props) {
  return (
    <BaseChakraProvider value={defaultSystem}>
      {children}
    </BaseChakraProvider>
  )
}
