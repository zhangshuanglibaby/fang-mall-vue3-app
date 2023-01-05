/*
 * @Date: 2022-12-29 22:16:59
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-05 13:34:21
 * @Description: 这是****文件
 */
import axios from '@/plugin/axios'

export const login = (params) => axios.post('/user/login', params)

export const register = (params) => axios.post('/user/register', params)

export const getUserInfo = (params) => axios.get('/user/info', params)

// 修改用户信息
export const editUserInfo = (params) => axios.put('/user/info', params)

// 退出登录
export const logout = () => axios.post('/user/logout')
