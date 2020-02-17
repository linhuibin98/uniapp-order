import request from '../utils/request.js'

// fetch 首页店铺列表
export async function fetchStores() {
  return await request({
    url: '/stores'
  })
}
