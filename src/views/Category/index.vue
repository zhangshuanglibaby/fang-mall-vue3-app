<!--
 * @Date: 2022-12-27 22:11:19
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-04 12:56:45
 * @Description: 这是****文件
-->
<template>
  <div class="category pageHeight">
    <!-- <CategoryHeader /> -->
    <SearchHeader placeholder="全场50元起步" @to="router.push({ path: '/productList' })" />
    <CategoryList :list="state.categoryData" @select="handleSelect" />
    <Navbar />
  </div>
</template>
<script setup>
import { onMounted, getCurrentInstance, reactive } from 'vue'
import { useRouter } from 'vue-router'
// import CategoryHeader from './components/CategoryHeader.vue'
import SearchHeader from '@/components/global/SearchHeader.vue'
import CategoryList from './components/CategoryList.vue'

const router = useRouter()
const { proxy: { $toast, $api }} = getCurrentInstance()
const state  = reactive({
  categoryData: []
})

onMounted(async () => {
  const Toast = $toast({ type: 'loading', message: '加载中...' })
  const res = await $api.goodGetCategory()
  Toast.close()
  state.categoryData = res
})
// 选择商品
const handleSelect = (categoryId) => {
  router.push({ path: '/productList', query: { categoryId } })
}
</script>
<style lang="less">
.category {
  display: flex;
  flex-direction: column;
}
</style>