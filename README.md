## Axios 请求库二次封装支持 get、post、put、patch、delete

### response 拦截 HttpCode 异常 console.error 输出

> 使用方法

```
import request, { configure, instance } from '@kiter/axios'

# configure 配置
configure({
  beforeRequest: (data) => {
    data['uid'] = localStorage.getItem('uid')
    data['token'] = localStorage.getItem('token')
    data['bodyType'] = 'formData' // 设置 bodyType = formData 后，所有数据会以 application/x-www-form-urlencoded 请求头进行提交
  },
  onError: (err) => {
    console.error(error)
  }
})

# instance 设置axios实例的 instance
instance.defaults.baseURL = ''
instance.defaults.timeout = 2500

# 发起请求，请求返回
const response = await request.post('demo/index')({
  page: 1,
  pageSize: 10
})

```
