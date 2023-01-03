/*
 * @Date: 2023-01-03 21:31:16
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-03 22:02:31
 * @Description: 这是****文件
 */
import axios from "@/plugin/axios"

// 创建订单
export const createOrder = (params) => axios.post('/saveOrder', params)

// 支付
export const payOrder = (params) => axios.get('/paySuccess', { params })