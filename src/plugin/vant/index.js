/*
 * @Date: 2022-12-27 22:06:13
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-28 12:12:34
 * @Description: 这是****文件
 */
// 引入需要使用的组件
import { Button } from 'vant'
// 引入vant样式
import 'vant/lib/index.css'

// 注册组需要的组件
export default (ctx) => {
  ctx.use(Button)
}