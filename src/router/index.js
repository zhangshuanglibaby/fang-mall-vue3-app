/*
 * @Date: 2022-12-27 20:44:17
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-27 22:40:38
 * @Description: 这是****文件
 */
import { createRouter, createWebHashHistory } from 'vue-router'

// 自动引入路由
const getList = (fileList) => {
  const list = fileList.keys().map(item => {
    const relativePath = item.substr(1)
    const file = require('@/views' + relativePath) // 引入的文件路径
    const path = relativePath.replace('/index.vue', '') // 访问路径
    console.log(path, 'path')
    return {
      name: path.substr(1).replace(/\//g, '-'),
      path,
      // meta: file.de
      component: () => Promise.resolve(file)
    }
  })
  return list
}

const pageFile = require.context("@/views", true, /index.vue/)
const routeList = getList(pageFile)
const routes = [
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About/index.vue')
  // },
  { path: '/', redirect: { path: '/Home' }},
  ...routeList
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
