import { AxiosRequestConfig } from 'axios'

export const requestSuccess = (config: AxiosRequestConfig) => {
  return config
}

export const requestFail = (error: any) => {
  return Promise.reject(error)
}
