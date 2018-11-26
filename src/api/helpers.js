import axios from 'axios'

const ERR_OK = 0
// 对 axios get的封装
export function get(url) {
  return function (params) { // 函数柯里化
    return axios.get(url, {
      params
    }).then((res) => {
      const { errno, data } = res.data // es6解构赋值
      if (errno === ERR_OK) {
        return data
      }
    }).catch(() => {
    })
  }
}
