/*
 * @Date: 2023-01-03 12:51:27
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-03 19:31:50
 * @Description: 这是****文件
 */
import axios from "@/plugin/axios/index"

// 获取默认地址
export const getDefaultAddress = () => axios.get('/address/default')

// 获取地址详情
export const getAddressDetail = (id) => axios.get(`/address/${id}`)

// 获取地址列表
export const getAddressList = () => axios.get('/address',  { pageNumber: 1, pageSize: 1000 })

// 添加地址
export const addAddress = (params) => axios.post('/address', params)

// 编辑地址
export const editAddress = (params) => axios.put('/address', params)

// 删除地址
export const deleteAddress = (id) => axios.delete(`/address/${id}`)