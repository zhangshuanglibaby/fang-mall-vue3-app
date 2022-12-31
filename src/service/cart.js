/*
 * @Date: 2022-12-31 22:47:53
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-31 22:57:09
 * @Description: 这是****文件
 */
import axios from "@/plugin/axios"

export const addCart = (params) => axios.post('/shop-cart', params)

export const getCart = (params) => axios.get('/shop-cart', params)