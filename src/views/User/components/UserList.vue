<!--
 * @Date: 2022-12-30 11:19:57
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-30 12:25:39
 * @Description: 这是****文件
-->
<template>
  <div class="user-list">
    <van-cell
      v-for="(item, index) in list"
      :key="index"
      :title="item.title"
      is-link
      @click="goTo(item.path)"></van-cell>
  </div>
</template>
<script setup>
import {useRouter } from 'vue-router'
const router = useRouter()
const list = [
  { title: '我的订单', path: '/order' },
  { title: '账号管理', path: '/setting' },
  { title: '地址管理', path: '/address' },
  { title: '关于我们', path: '/about' },
]

// 跳路径
const goTo = (path) => {
  router.push({ path })
}
</script>
<style lang="less" scoped>
.user-list {
  margin-top: 40px;
}
</style>