<!--
 * @Date: 2022-12-27 22:11:19
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-29 01:08:09
 * @Description: 这是****文件
-->
<template>
  <div class="home pageHeight">
    <!-- 头部 -->
    <HomeHeader />
    <!-- 轮播图 -->
    <Swiper :list="swiperList" />
    <!-- 分类 -->
    <CategoryList  />
    <!-- 商品/新品上线 -->
    <HomeGood v-for="(item, key, index) in goods" :key="key" :list="item" :title="goodsTitle[index]"></HomeGood>
    <Navbar />
  </div>
</template>
<script setup>
import HomeHeader from './components/HomeHeader.vue'
import Swiper from '@/components/modules/Swiper.vue'
import CategoryList from './components/CategoryList.vue'
import HomeGood from './components/HomeGood.vue'
import { onMounted, getCurrentInstance, reactive } from 'vue'
const { proxy: { $api, $toast } } = getCurrentInstance() // 获取挂载在vue实例上的$api
let swiperList = reactive([]) // 轮播图数据
const goods = reactive({
  newGoodses: [], // 新品上线
  hotGoodses: [], // 热门商品
  recommendGoodses: [] // 推荐商品
})
const goodsTitle = ['新品上线', '热门商品', '推荐商品']
onMounted(async () => {
  const Toast = $toast({
    type: 'loading',
    message: '加载中...',
    forbidClick: true
  })
  const { carousels, newGoodses, hotGoodses, recommendGoodses } = await $api.homeGetHome()
  swiperList = carousels
  goods.newGoodses = newGoodses
  goods.hotGoodses = hotGoodses
  goods.recommendGoodses = recommendGoodses
  Toast.close()
})
</script>
<style lang="less" scoped>

</style>