import type { GetUserEntry } from '@/api/generated'
import { createContext } from 'react'

interface AuthContextValue {
  currentUser: GetUserEntry | null
  isAuthenticated: boolean
  logout: () => void
}
export const AuthContext = createContext<AuthContextValue | undefined>(undefined)
