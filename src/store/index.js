/*
 * @Date: 2022-12-27 20:44:17
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-31 23:12:03
 * @Description: 这是****文件
 */
import { createStore } from 'vuex'
import { setLocal, getLocal } from '@/common/utils/index'
import { getUserInfo } from '@/service/user'
import { getCart } from '@/service/cart'

export default createStore({
  state: {
    token: getLocal("token"), // token
    userInfo: {}, // 用户信息
    cartCount: 0 // 购物车数量
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
    },

    // 获取购物车数量
    updateCart: async ({ commit }) => {
      const res = await getCart()
      commit('update', { key: 'cartCount', value: res.length })
    }
  },
  modules: {
  }
})
