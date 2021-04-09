import Axios, { configure } from '../src/index'

describe('测试axios', () => {
  test('请求post', () => {
    configure({
      beforeRequest: (data) => {
        // console.log(data)
      },
      onError: (err) => {
        console.log(err)
      }
    })
    Axios.post('http://58.42.4.33:20004/ts_shop/material/cates', {
      bodyType: 'formData'
    })().then((res) => {
      console.log(res)
    })
  })
})
