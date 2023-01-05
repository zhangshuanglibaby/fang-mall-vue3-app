<!--
 * @Date: 2022-12-28 14:22:37
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-05 21:51:16
 * @Description: 这是****文件
-->
<template>
  <header class="home-header" :style="{ background: bgStyle }">
    <router-link to="/category" custom v-slot="{ navigate }"><van-icon name="apps-o" class="menu-icon" :class="{ active }" @click="navigate" /></router-link>
    <div class="header-search">
      <span class="app-name">栗子商城</span>
      <van-icon name="search" class="search-icon" />
      <router-link to="/productList?from=home" class="search-title">尽情搜索，应有尽有</router-link>
    </div>
    <router-link to="/login" v-if="!$store.state.token"><span class="login">登陆</span></router-link>
    <router-link to="/user" v-else><van-icon name="manager" class="menu-icon" :class="{ active }" /></router-link>
  </header>
</template>
<script setup>
import { defineProps, computed } from 'vue'
const props  = defineProps({
  bgOpacity: Number
})
const active = computed(() => {
  return Boolean(props.bgOpacity)
})
const bgStyle = computed(() => { 
  return `rgba(21, 67, 160, ${props.bgOpacity})`
})
</script>
<style lang="less" scoped>
/*
  -----头部------ */
  .home-header {
  position: fixed;
  top: 0;
  left: 0;
  .wh(100%, 100px);
  .fj(space-between);
  .sc(15px, #fff);
  padding: 0 30px;
  z-index: 1000;
  .boxSizing;
  .menu-icon {
    color: @primary;
    font-size: 34px;
    line-height: 100px;
    &.active {
      color: #fff;
    }
  }
  .header-search {
    display: flex;
    .wh(74%, 4-px);
    line-height: 40px;
    margin: 20px 0;
    padding: 10px 0;
    color: #232326;
    background: rgba(255, 255, 255, .7);
    border-radius: 40px;
    .app-name {
      padding: 0 20px;
      color: @primary;
      font-size: 40px;
      font-weight: bold;
      border-right: 1px solid #666;
    }
    .search-icon {
      padding: 0 20px;
      font-size: 34px;
    }
    .search-title {
      font-size: 24px;
      color: #666;
      line-height: 42px;
    }
  }
  .login {
    color: @primary;
    line-height: 104px;
  }
}
</style>