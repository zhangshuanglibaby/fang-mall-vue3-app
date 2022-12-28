/*
 * @Date: 2022-12-28 15:57:06
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-28 20:55:22
 * @Description: 这是****文件
 */
import router from '@/router/index'
import axios from 'axios'
import { Toast } from 'vant'
import store from '@/store/index'
// 创建axios实例
const service = axios.create({
  baseURL: process.env.NODE_ENV == 'development' ? '//backend-api-01.newbee.ltd/api/v1' : '//backend-api-01.newbee.ltd/api/v1',
  timeout: 6000, // 请求超时时间
  withCredentials: true, // 异步请求携带cookie
  headers: {
    'Content-Type': 'application/json', // 设置后端需要的传参类型
    'token': localStorage.getItem('token') || '',
    'X-Requested-With': 'XMLHttpRequest'
  }
})

// 添加响应拦截
service.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    Toast.fail('服务端异常！')
    return Promise.reject(res)
  }
  if (res.data.resultCode === 200) {
    return res.data.data
  }
  res?.data?.message && Toast.fail(res.data.message)
  if (res.data.resultCode === 416) {
    router.push({ path: '/login' })
  }
  if(res.data.data && window.location.hash === '#/login') {
    store.commit('setToken', res.data.data)
    service.headers['token'] = res.data.data
  }
  return Promise.reject(res.data)
})
export default service