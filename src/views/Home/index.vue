<!--
 * @Date: 2022-12-27 22:11:19
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-28 16:30:47
 * @Description: 这是****文件
-->
<template>
  <!-- 头部 -->
  <HomeHeader />
  <Navbar />
</template>
<script setup>
import { onMounted } from 'vue'
import HomeHeader from './components/HomeHeader.vue'
import { getHome } from '@/service/home.js'

// const state = reactive({
//   swiperList: [] // 轮播图
// })

onMounted(async () => {
  const res = await getHome()
  console.log(res, 'resres')
})
</script>
<style lang="less" scoped>

</style>