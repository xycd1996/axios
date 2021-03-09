import { AxiosResponse } from 'axios'
import { HTTP_CODE } from './../constants/index'

export const responseSuccess = (response: AxiosResponse) => {
  return response
}

export const responseFail = (error: any) => {
  if (error && error.response) {
    console.log(HTTP_CODE[status])
  } else {
    console.log('服务器无响应')
  }
  return error
}
