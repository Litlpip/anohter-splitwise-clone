import { useAuth } from '../context/useAuth.ts'

export function useLogout() {
  const { logout } = useAuth()
  return logout
}
