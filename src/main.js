/*
 * @Date: 2022-12-27 20:44:17
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-28 14:24:19
 * @Description: 这是****文件
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './common/style/mixin.less'
import vantCom from './plugin/vant/index.js'
const app = createApp(App)

vantCom(app) // 注册vant的组件
app.use(store).use(router).mount('#app')
