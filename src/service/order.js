/*
 * @Date: 2023-01-03 21:31:16
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-04 18:57:53
 * @Description: 这是****文件
 */
import axios from "@/plugin/axios"

// 创建订单
export const createOrder = (params) => axios.post('/saveOrder', params)

// 支付
export const payOrder = (params) => axios.get('/paySuccess', { params })

// 订单列表
export const getOrderList = (params) => axios.get('/order', { params })