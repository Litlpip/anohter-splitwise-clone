import { useMutation } from '@tanstack/react-query'
import { authApi } from '@/api'
import { tokenStorage } from '@/lib/storage'
import type { LoginFormData } from '../schemas/loginSchema'
import { ROUTES } from '@/lib/constants.ts'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/useAuth'

export function useLogin() {
  const navigate = useNavigate()
  const { login } = useAuth()
  return useMutation({
    mutationFn: async (data: LoginFormData) => {
      const response = await authApi.apiV1AuthLoginPost({
        username: data.username,
        password: data.password,
      })

      // todo: remove if and fix scheme
      // Check if response data is a string (JWT token) or GetUserEntry object
      if (typeof response.data === 'string') {
        // API returned JWT token as string (despite schema saying GetUserEntry)
        const token = response.data
        if (token) {
          tokenStorage.setToken(token)
        }
      } else {
        // Check if token is in response headers (Authorization header)
        const authHeader = response.headers?.authorization || response.headers?.Authorization
        if (authHeader) {
          const token = authHeader.replace('Bearer ', '')
          tokenStorage.setToken(token)
        } else {
          console.warn('JWT token not found in response. Please check the API response structure.')
          console.log('Response data:', response.data)
          console.log('Response headers:', response.headers)
        }
      }

      return response.data
    },
    onSuccess: () => {
      console.log('here 1')
      login()
      navigate(ROUTES.HOME)
    },
  })
}
