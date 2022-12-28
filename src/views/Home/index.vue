<!--
 * @Date: 2022-12-27 22:11:19
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-28 16:53:37
 * @Description: 这是****文件
-->
<template>
  <!-- 头部 -->
  <HomeHeader />
  <Navbar />
</template>
<script setup>
import { onMounted, getCurrentInstance } from 'vue'
import HomeHeader from './components/HomeHeader.vue'
const { proxy: { $api } } = getCurrentInstance() // 获取挂载在vue实例上的$api
// const state = reactive({
//   swiperList: [] // 轮播图
// })
onMounted(async () => {
  const res = await $api.homeGetHome()
  console.log(res, 'resres')
})
</script>
<style lang="less" scoped>

</style>