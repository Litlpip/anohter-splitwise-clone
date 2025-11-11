import axios from 'axios'
import { tokenStorage } from '@/lib/storage'
import { API_BASE_URL } from '@/lib/constants'

export const apiAxios = axios.create({
  baseURL: API_BASE_URL,
})

// Request interceptor: add Authorization header
apiAxios.interceptors.request.use(
  (config) => {
    const token = tokenStorage.getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Response interceptor: handle 401 errors
apiAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid - clear it
      tokenStorage.removeToken()
      // Optionally redirect to login
      window.location.href = '/login'
    }
    return Promise.reject(error)
  },
)
