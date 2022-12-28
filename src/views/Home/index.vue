<!--
 * @Date: 2022-12-27 22:11:19
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-28 21:24:13
 * @Description: 这是****文件
-->
<template>
  <!-- 头部 -->
  <HomeHeader />
  <Swiper :list="swiperList" />
  <Navbar />
</template>
<script setup>
import HomeHeader from './components/HomeHeader.vue'
import Swiper from '@/components/modules/Swiper.vue'
import { onMounted, getCurrentInstance, reactive, toRefs } from 'vue'
const { proxy: { $api } } = getCurrentInstance() // 获取挂载在vue实例上的$api
const state = reactive({
  swiperList: [] // 轮播图
})
onMounted(async () => {
  const { carousels } = await $api.homeGetHome()
  state.swiperList = carousels
})
// 解构
const { swiperList } = toRefs(state)
</script>
<style lang="less" scoped>

</style>