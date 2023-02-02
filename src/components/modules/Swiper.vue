<!--
 * @Date: 2022-12-28 15:41:09
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-02-03 00:22:53
 * @Description: 这是****文件
-->
<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#1543a0">
    <van-swipe-item v-for="(item, index) in list" :key="index">
      <img :src="item.carouselUrl" alt="" @click="handleJump(item.redirectUrl)">
    </van-swipe-item>
  </van-swipe>
</template>
<script setup>
defineProps({
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