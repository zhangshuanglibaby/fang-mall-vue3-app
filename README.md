<!--
 * @Date: 2022-12-27 20:44:21
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-01 22:42:36
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

定义globalComponents配置自动挂载vue的全局组件

配置axios, 在vue的原型上挂载$api方法，方式和vue2不一样，请注意

开发首页轮播图组件、首页的分类、首页的商品

开发navbar底部导航组件

给home的顶部增加滚动渐变底色效果

开发顶部的导航标题

开发登陆页
    开发验证码组件 --主要是用了canvas
    注意有的时候使用ref引用组件实例的方法和属性，组件内需要使用defineExpose暴露出去
    登录的密码使用js-md5加密 将md5方法挂载搭配实例

开发我的页面
    将获取用户信息方法放在了vuex的store中解决

开发分类页面
    封装滚动组件
    实现的效果：1、点击左侧菜单，自动定位右侧内容   2、右侧内容滚动到不同菜单，自动定位左侧菜单
                需要使用元素的scrollIntoView方法
                监听滚动后面需要增加节流来优化性能

开发商品详情页
    将购物车的数量存储在vuex中

开发购物车页面
    1. 考虑购物车空状态
    2. 考虑单选和全选的联动交互
    3. 删除时记得删除选中的id集合 和 购物车列表item 和更新购物车数量
    4. 更改数量的交互
    5. 选中、删除、更改数量 的价格动态变化
    6. 有个地方，单选取消的时候会更改全选的状态会触发到全选状态的change事件，是通过将全选的change事件改成click事件