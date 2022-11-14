import axios from 'axios'
import { useUserStore } from '~~/store'

export interface PaginatedResponse<T> {
  currentPage: number | null
  data: T[]
  limit: number | null
  total: number | null
}

export interface ApiMethods {
  setToken: (token: string) => void
  // getToken: () => string | null
  getBaseUrl: () => string
  get: (url: string) => Promise<any>
  post: <T>(url: string, data?: T) => Promise<any>
  patch: <T>(path: string, data: Partial<T>) => Promise<any>
  delete: <T>(url: string, data?: T) => Promise<any>
}

export default class API implements ApiMethods {
  // private static instance: APi
  axios
  baseUrl: string
  constructor() {
    const { getCurrentUserToken } = useUserStore()

    this.axios = axios.create({
      baseURL: this.getBaseUrl(),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    this.baseUrl = this.getBaseUrl()
    this.setTokenFromCookie(getCurrentUserToken)
  }

  private setTokenFromCookie(token: string): void {
    this.axios.defaults.headers.common.Authorization = `Bearer ${token}`
  }

  setToken(token: string) {
    this.axios.defaults.headers.common.Authorization = `Bearer ${token}`
    return this
  }

  getBaseUrl() {
    const { $getApiUrl } = useNuxtApp()
    return $getApiUrl() as string
  }

  // getToken(): string | null {
  //   const { cookies } = useCookies()
  //   return cookies.get('userToken')
  // }

  public deleteCredentials() {
    this.axios.defaults.headers.common.Authorization = ''
  }

  async get<T>(path: string): Promise<T> {
    const res = await this.axios.get(`${this.baseUrl}${path}`)
    return res.data
  }

  async post<T>(path: string, data: T): Promise<T> {
    const res = await this.axios.post(`${this.baseUrl}${path}`, data)
    return res.data
  }

  async patch<T>(path: string, data: Partial<T>): Promise<T> {
    const res = await this.axios.patch(`${this.baseUrl}${path}`, data)
    return res.data
  }

  async delete(path: string): Promise<any> {
    const res = await this.axios.delete(`${this.baseUrl}${path}`)
    return res.data
  }
}
