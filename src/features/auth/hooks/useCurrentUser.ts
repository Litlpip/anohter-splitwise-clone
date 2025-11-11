import { useQuery } from '@tanstack/react-query'
import { authApi } from '@/shared/api/client'
import type { GetUserEntry } from '@/api/generated'

export function useCurrentUser() {
  return useQuery<GetUserEntry>({
    queryKey: ['currentUser'],
    queryFn: async () => {
      const response = await authApi.apiV1AuthAccountGet()
      return response.data
    },
  })
}
