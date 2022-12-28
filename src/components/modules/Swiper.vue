<!--
 * @Date: 2022-12-28 15:41:09
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-28 21:31:11
 * @Description: 这是****文件
-->
<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#1543a0">
    <van-swipe-item v-for="(item, index) in props.list" :key="index">
      <img :src="item.carouselUrl" alt="" @click="handleJump(item.redirectUrl)">
    </van-swipe-item>
  </van-swipe>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  list: Array
})

// 点击图片
const handleJump = (url) => {
  window.open(url)
}
</script>
<style lang="less" scoped>
.my-swipe {
  img {
    width: 100%;
    height: 100%;
  }
}
</style>