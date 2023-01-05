<!--
 * @Date: 2022-12-27 20:44:17
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-05 13:12:14
 * @Description: 这是****文件
-->
<template>
  <router-view class="router-view" />
</template>
<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
// 获取用户信息
onMounted(() => {
  store.dispatch('setUserInfo')
})
</script>
<style lang="less">
html, body {
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  font-size: 24px;
}
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
.router-view {
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: 0 auto;
  -webkit-overflow-scrolling: touch;
}
</style>
