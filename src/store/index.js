/*
 * @Date: 2022-12-27 20:44:17
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-28 16:16:58
 * @Description: 这是****文件
 */
import { createStore } from 'vuex'
import { setLocal, getLocal } from '@/common/utils/index'

export default createStore({
  state: {
    token: getLocal("token")
  },
  getters: {
  },
  mutations: {
    setToken: (state, value) => {
      state.token = value
      setLocal('token', value)
    }
  },
  actions: {
  },
  modules: {
  }
})
