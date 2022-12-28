<!--
 * @Date: 2022-12-27 20:44:21
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-28 15:04:07
 * @Description: 这是****文件
-->
# mall-vue3-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

ui框架使用的是vant4 + 按需引入vant
浏览器适配使用viewport布局
下载 npm install postcss-px-to-viewport --save-dev
新建postcss.config.js 配置将px转成视口单位
新增plugin文件夹下的vant文件 二次封装van-button

新增common/style下的样式文件，base.less、mixin.less
router写入自动引入路径方法
注意router-link的引入方式发生变化
vue全局引入less样式文件
方法一：
分开安装：npm i style-resources-loader，npm i vue-cli-plugin-style-resources-loader
需要在vue.config.js中额外配置
方法二：直接 vue add style-resources-loader，自动会在vue.config.js中引入配置