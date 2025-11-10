import { Configuration, AuthorizationApi } from '@/api/generated'
import { API_BASE_URL } from '@/shared/config/constants'
import { apiAxios } from './axiosConfig'

const configuration = new Configuration({
  basePath: API_BASE_URL,
})

export const authApi = new AuthorizationApi(configuration, API_BASE_URL, apiAxios)
