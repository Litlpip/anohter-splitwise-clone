import { useMutation } from '@tanstack/react-query'
import { authApi } from '@/shared/api/client'
import { tokenStorage } from '@/shared/api/tokenStorage'
import type { LoginFormData } from '../schemas/loginSchema'
import type { GetUserEntry } from '@/api/generated'
import { ROUTES } from '@shared'
import { useNavigate } from 'react-router-dom'

export function useLogin() {
  const navigate  = useNavigate()

  return useMutation({
    mutationFn: async (data: LoginFormData) => {
      const response = await authApi.apiV1AuthLoginPost({
        username: data.username,
        password: data.password,
      })

      // TODO: По схеме не подходит тип ответа
      const token = response.data as string || null
      if (token) {
        tokenStorage.setToken(token)
      } else {
        console.warn('JWT token not found in response. Please check the API response structure.')
      }

      return response.data
    },
    onSuccess: (data: GetUserEntry) => {
      console.log('data', data)
      // Cache user data under 'currentUser' key
      navigate(ROUTES.HOME)
    },
  })
}
