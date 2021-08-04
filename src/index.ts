import axios from 'axios'
import omit from 'lodash/omit'
import qs from 'qs'
import config from './config'
import { requestFail, requestSuccess } from './interceptors/request'
import { responseFail, responseSuccess } from './interceptors/response'

let defaultConfig = config()

const Axios = axios.create({
  timeout: 10000,
  withCredentials: false,
  responseType: 'json',
  validateStatus: function (status) {
    return status >= 200 && status < 300
  },
  transformRequest: (data, headers) => {
    let cData = {}
    headers['Content-Type'] = 'application/json'
    defaultConfig.beforeRequest(data, headers)
    if (data?.bodyType === 'formData') {
      cData = qs.stringify(omit(data, ['bodyType']))
      headers['Content-Type'] = 'application/x-www-form-urlencoded'
      return cData
    }
    return omit(data, ['bodyType'])
  },
  transformResponse: (response) => {
    return {
      msg: response.msg,
      data: response?.data,
      code: response?.code,
      ...omit(response, ['msg', 'data', 'code'])
    }
  }
})

Axios.interceptors.request.use(requestSuccess, requestFail)
Axios.interceptors.response.use(
  (response) => responseSuccess(response, defaultConfig),
  (fail) => responseFail(fail, defaultConfig)
)

const retAxios = {
  get: (url: string) => (params?: any) => {
    return Axios({
      method: 'GET',
      url,
      params
    })
      .then((res) => Promise.resolve(res.data))
      .catch((err) => Promise.reject(err))
  },
  post: (url: string, options?: any) => (data?: any) => {
    return Axios({
      method: 'POST',
      url,
      data: Object.assign({}, data, { bodyType: options?.bodyType })
    })
      .then((res) => Promise.resolve(res.data))
      .catch((err) => Promise.reject(err))
  },
  put: (url: string) => (data?: any) => {
    return Axios({
      method: 'PUT',
      url,
      data
    })
      .then((res) => Promise.resolve(res.data))
      .catch((err) => Promise.reject(err))
  },
  delete: (url: string) => (params?: any) => {
    return Axios({
      method: 'DELETE',
      url,
      params
    })
      .then((res) => Promise.resolve(res.data))
      .catch((err) => Promise.reject(err))
  },
  patch: (url: string) => (data?: any) => {
    return Axios({
      method: 'PATCH',
      url,
      data
    })
      .then((res) => Promise.resolve(res.data))
      .catch((err) => Promise.reject(err))
  }
}

export const configure = (config) => {
  defaultConfig = { ...defaultConfig, ...config }
}

export { default as getDefaultConfig } from './config'
export { Axios as instance }
export default retAxios
