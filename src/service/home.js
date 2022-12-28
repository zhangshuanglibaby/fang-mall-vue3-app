/*
 * @Date: 2022-12-28 16:20:59
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-28 16:33:22
 * @Description: 这是****文件
 */
import axios  from "@/plugin/axios/index"

export const getHome = () =>  axios.get('/index-infos')