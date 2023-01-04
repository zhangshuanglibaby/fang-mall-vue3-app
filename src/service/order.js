/*
 * @Date: 2023-01-03 21:31:16
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-04 20:33:13
 * @Description: 这是****文件
 */
import axios from "@/plugin/axios"

// 创建订单
export const createOrder = (params) => axios.post('/saveOrder', params)

// 支付订单
export const payOrder = (params) => axios.get('/paySuccess', { params })

// 订单列表
export const getOrderList = (params) => axios.get('/order', { params })

// 订单详情
export const getOrderDetail = (id) => axios.get(`/order/${id}`)

// 取消订单
export const cancelOrder = (id) => axios.put(`/order/${id}/cancel`)

// 确认订单
export const confirmOrder = (id) => axios.put(`/order/${id}/finish`)
