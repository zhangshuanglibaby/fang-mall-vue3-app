/*
 * @Date: 2022-12-27 22:06:13
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-01 11:13:25
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
  Field,
  Cell,
  ActionBar,
  ActionBarIcon,
  ActionBarButton,
  Checkbox,
  CheckboxGroup,
  SwipeCell,
  Stepper,
  SubmitBar
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
    .use(Cell)
    .use(ActionBar)
    .use(ActionBarIcon)
    .use(ActionBarButton)
    .use(Checkbox)
    .use(CheckboxGroup)
    .use(SwipeCell)
    .use(Stepper)
    .use(SubmitBar)
}