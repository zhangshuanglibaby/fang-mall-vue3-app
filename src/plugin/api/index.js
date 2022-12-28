/*
 * @Date: 2022-12-28 16:35:37
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-28 16:52:08
 * @Description: 这是****文件
 */
const apiList = require.context('@/service', false, /.js$/)
const api = apiList.keys().reduce((total, item) => {
  const apiName = item.substring(2, item.length - 3)
  return Object.keys(apiList(item)).reduce((apiTotal, key) => {
    apiTotal[apiName + key.replace(key[0], key[0].toUpperCase())] = apiList(item)[key]
    return apiTotal
  }, total)
},{})

export default api