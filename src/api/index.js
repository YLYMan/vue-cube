import { get } from './helpers' // 导入 get 方法

const getSeller = get('/api/seller')
const getGoods = get('/api/goods')

export { // 导出 getSeller
  getSeller,
  getGoods
}
