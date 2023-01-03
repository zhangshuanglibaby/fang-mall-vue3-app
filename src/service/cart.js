/*
 * @Date: 2022-12-31 22:47:53
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-03 12:51:04
 * @Description: 这是****文件
 */
import axios from "@/plugin/axios"

export const addCart = (params) => axios.post('/shop-cart', params)

export const getCart = (params) => axios.get('/shop-cart', params)

export const deleteCartItem = (id) => axios.delete(`/shop-cart/${id}`)

export const modifyCart = (params) => axios.put('/shop-cart', params)

export const getByCartItemIds = (params) => axios.get('/shop-cart/settle', { params })