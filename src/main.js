/*
 * @Date: 2022-12-27 20:44:17
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-29 22:57:09
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
import { prefix } from '@/common/utils/index'
import md5 from 'js-md5'
const app = createApp(App)

vantCom(app) // 注册vant的组件
globalCom(app) // 注册vue的全局组件
// 定义全局$api
app.config.globalProperties.$api = api
// 定义全局补充图片前缀的方法
app.config.globalProperties.$filters = { prefix }
// 挂载md5 方法
app.config.globalProperties.$md5 = md5
app.use(store).use(router).mount('#app')
