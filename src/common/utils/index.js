/*
 * @Date: 2022-12-28 16:09:11
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-29 00:12:58
 * @Description: 这是****文件
 */
export const getLocal = (name) => {
  return localStorage.getItem(name)
}

export const setLocal = (name, value) => {
  return localStorage.setItem(name, value)
}

// 图片前缀方法
export const prefix = (url) => {
  if (url && url.startsWith('http')) {
    return url
  } 
  url = `http://backend-api-01.newbee.ltd${url}`
  return url
}