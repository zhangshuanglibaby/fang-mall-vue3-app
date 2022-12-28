/*
 * @Date: 2022-12-28 15:29:04
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-28 15:35:48
 * @Description: 这是定义全局组件文件
 */

/*
  ------定义vue全局组件文件------
*/
const comlist = require.context('@/components/global', false, /.vue$/)
export default (ctx) => {
  comlist.keys().forEach(item => {
    const comName = item.substring(2, item.length - 4)
    ctx.component(comName, comlist(item).default)
  })
}