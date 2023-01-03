<!--
 * @Date: 2022-12-28 15:28:10
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-03 22:24:06
 * @Description: 这是****文件
-->
<template>
  <div class="nav-bar">
    <section class="nav-list van-hairline--top">
      <router-link
        class="nav-list-item"
        v-for="item in navList"
        :key="item.path"
        :to="item.path">
        <van-icon class="nav-icon" :name="item.icon" :badge="item.path === '/cart' && $store.state.cartCount || ''" />
        <span class="nav-title">{{ item.title }}</span>
      </router-link>
    </section>
  </div>
</template>
<script setup>
// 导航栏数据
const navList = [
  { title: '首页', icon: 'wap-home-o', path: '/home' },
  { title: '分类', icon: 'apps-o', path: '/category' },
  { title: '购物车', icon: 'shopping-cart-o', path: '/cart' },
  { title: '我的', icon: 'manager-o', path: 'user' }
]
</script>
<style lang="less">
.nav-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: @navBarHeight;
  background: #fff;
  transform: translateZ(0);
  z-index: 10;
  .nav-list {
    width: 100%;
    height: 100%;
    .flexCenter;
    .nav-list-item {
      display: flex;
      flex-direction: column;
      flex: 1;
      text-align: center;
      .nav-icon {
        font-size: 44px;
        margin: 0 auto;
        z-index: 100;
      }
      .nav-title {
        font-size: 24px;
      }
      &.router-link-active {
        color: @primary;
      }
    }
  }
}
</style>