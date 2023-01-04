/*
 * @Date: 2022-12-30 15:13:49
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-04 13:54:13
 * @Description: 这是****文件
 */
import axios from '@/plugin/axios'

export const getCategory = (params) => axios.get('/categories', params)

export const getDetail = (id) => axios.get(`/goods/detail/${id}`)

// 搜索商品
export const searchGood = (params) => axios.get('/search', { params })