import { useMutation, useQueryClient } from '@tanstack/react-query'
import { authApi } from '@/shared/api/client'
import { tokenStorage } from '@/shared/api/tokenStorage'
import type { LoginFormData } from '../schemas/loginSchema'
import type { GetUserEntry } from '@/api/generated'

export function useLogin() {
  const queryClient = useQueryClient()

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
      // Cache user data under 'currentUser' key
      queryClient.setQueryData(['currentUser'], data)
    },
  })
}
