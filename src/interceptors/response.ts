import { AxiosResponse } from 'axios'
import { HTTP_CODE } from './../constants/index'

export const responseSuccess = (response: AxiosResponse, defaultConfig?: any) => {
  if (response?.data?.code !== '200') {
    defaultConfig.onError && defaultConfig.onError(response?.data)
    return Promise.reject(response)
  }
  return response
}

export const responseFail = (error: any, defaultConfig?: any) => {
  if (error && error.response) {
    defaultConfig.onError && defaultConfig.onError(HTTP_CODE[status])
  } else {
    defaultConfig.onError && defaultConfig.onError('服务器无响应')
  }
  return error
}
