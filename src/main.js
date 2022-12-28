/*
 * @Date: 2022-12-27 20:44:17
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-28 16:51:44
 * @Description: 这是****文件
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './common/style/mixin.less'
import vantCom from './plugin/vant/index.js'
import globalCom from './plugin/globalComponents/index.js'
import api from '@/plugin/api'
const app = createApp(App)

vantCom(app) // 注册vant的组件
globalCom(app) // 注册vue的全局组件
// 定义全局$api
console.log(api, 'apipapp')
app.config.globalProperties.$api = api
app.use(store).use(router).mount('#app')
