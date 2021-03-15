import Axios, { configure } from '../src/index'

describe('测试axios', () => {
  test('请求post', (done) => {
    configure({
      beforeRequest: (data) => {
        console.log(6666)
      },
    })
    Axios.post('http://58.42.4.33:20004/ts_shop/material/cates')({
      key: '1',
      name: '222',
    }).then((res) => {
      // console.log(res)
      expect(res)
    })
  })
})
