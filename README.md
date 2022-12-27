<!--
 * @Date: 2022-12-27 20:44:21
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-27 22:08:04
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