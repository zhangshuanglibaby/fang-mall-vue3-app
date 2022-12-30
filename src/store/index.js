/*
 * @Date: 2022-12-27 20:44:17
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-30 12:19:27
 * @Description: 这是****文件
 */
import { createStore } from 'vuex'
import { setLocal, getLocal } from '@/common/utils/index'
import { getUserInfo } from '@/service/user'

export default createStore({
  state: {
    token: getLocal("token"),
    userInfo: {}
  },
  getters: {
  },
  mutations: {
    update: (state, { key, value }) => {
      state[key] = value
    },
    // 设置token
    setToken: (state, value) => {
      state.token = value
      setLocal('token', value)
    }
  },
  actions: {
    // 获取用户信息
    setUserInfo: async ({ state, commit }) => {
      // 已经有用户信息则不需要请求
      if(Object.keys(state.userInfo).length) return
      const res = await getUserInfo()
      commit('update', { key: 'userInfo', value: res})
    }
  },
  modules: {
  }
})
