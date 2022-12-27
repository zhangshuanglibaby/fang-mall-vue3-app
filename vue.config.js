/*
 * @Date: 2022-12-27 20:44:17
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-27 21:38:34
 * @Description: 这是****文件
 */
const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  }
})
