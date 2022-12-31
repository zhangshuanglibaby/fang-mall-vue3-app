/*
 * @Date: 2022-12-30 15:13:49
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-31 13:49:31
 * @Description: 这是****文件
 */
import axios from '@/plugin/axios'

export const getCategory = (params) => axios.get('/categories', params)

export const getDetail = (id) => axios.get(`/goods/detail/${id}`)