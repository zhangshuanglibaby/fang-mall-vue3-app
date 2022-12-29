/*
 * @Date: 2022-12-29 22:16:59
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-29 22:18:35
 * @Description: 这是****文件
 */
import axios from '@/plugin/axios'

export const login = (params) => axios.post('/user/login', params)

export const register = (params) => axios.post('/user/register', params)
