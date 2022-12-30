/*
 * @Date: 2022-12-30 15:13:49
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-30 15:14:46
 * @Description: 这是****文件
 */
import axios from '@/plugin/axios'

export const getCategory = (params) => axios.get('/categories', params) 