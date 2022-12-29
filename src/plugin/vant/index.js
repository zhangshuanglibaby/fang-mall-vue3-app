/*
 * @Date: 2022-12-27 22:06:13
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-29 20:44:11
 * @Description: 这是****文件
 */
// 引入需要使用的组件
import {
  Button,
  Icon,
  Swipe,
  SwipeItem,
  showToast,
  Skeleton,
  Form,
  Field
} from 'vant'
// 引入vant样式
import 'vant/lib/index.css'

// 注册组需要的组件
export default (ctx) => {
  ctx.config.globalProperties.$toast = showToast
  ctx.use(Button)
    .use(Icon)
    .use(Swipe)
    .use(SwipeItem)
    .use(Skeleton)
    .use(Form)
    .use(Field)
}