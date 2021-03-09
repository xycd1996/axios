import axios from 'axios'
import { requestFail, requestSuccess } from './interceptors/request'

const Axios = axios.create({
  timeout: 10000,
  withCredentials: false,
  responseType: 'json',
  validateStatus: function (status) {
    return status >= 200 && status < 300
  },
})

Axios.interceptors.request.use(requestSuccess, requestFail)
Axios.interceptors.response.use()

const retAxios = {
  get(url: string, params?: any) {
    return Axios({
      method: 'GET',
      url,
      params,
    })
      .then((res) => Promise.resolve(res))
      .catch((err) => Promise.reject(err))
  },
  post(url: string, data?: any) {
    return Axios({
      method: 'POST',
      url,
      data,
    })
      .then((res) => Promise.resolve(res))
      .catch((err) => Promise.reject(err))
  },
  put(url: string, data?: any) {
    return Axios({
      method: 'PUT',
      url,
      data,
    })
      .then((res) => Promise.resolve(res))
      .catch((err) => Promise.reject(err))
  },
  delete(url: string, params?: any) {
    return Axios({
      method: 'DELETE',
      url,
      params,
    })
      .then((res) => Promise.resolve(res))
      .catch((err) => Promise.reject(err))
  },
  patch(url: string, data?: any) {
    return Axios({
      method: 'PATCH',
      url,
      data,
    })
      .then((res) => Promise.resolve(res))
      .catch((err) => Promise.reject(err))
  },
}

export { Axios as config }

export default retAxios
