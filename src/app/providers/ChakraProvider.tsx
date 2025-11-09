import { ChakraProvider as BaseChakraProvider, defaultSystem } from '@chakra-ui/react'
import { type ReactNode } from 'react'
import { ColorModeProvider } from '@/components/ui/color-mode'

interface Props {
  children: ReactNode
}

export function ChakraProvider({ children }: Props) {
  return (
    <BaseChakraProvider value={defaultSystem}>
      <ColorModeProvider>
        {children}
      </ColorModeProvider>
    </BaseChakraProvider>
  )
}
