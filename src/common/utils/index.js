/*
 * @Date: 2022-12-28 16:09:11
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-28 16:11:30
 * @Description: 这是****文件
 */
export const getLocal = (name) => {
  return localStorage.getItem(name)
}

export const setLocal = (name, value) => {
  return localStorage.setItem(name, value)
}