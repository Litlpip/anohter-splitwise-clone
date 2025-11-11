import { Configuration, AuthorizationApi } from '@/api/generated'
import { API_BASE_URL } from '@/lib/constants'
import { apiAxios } from './config'

const configuration = new Configuration({
  basePath: API_BASE_URL,
})

export const authApi = new AuthorizationApi(configuration, API_BASE_URL, apiAxios)
