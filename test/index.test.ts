const Axios = require('../src/index.ts')

describe('测试axios', () => {
  test('请求post', (done) => {
    Axios.post('http://58.42.4.33:20004/ts_shop/material/cates', {}).then((res) => {
      console.log(res)
      expect(res).toEqual({
        success: true,
      })
    })
  })
})
