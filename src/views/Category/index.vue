<!--
 * @Date: 2022-12-27 22:11:19
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-03 22:29:12
 * @Description: 这是****文件
-->
<template>
  <div class="category pageHeight">
    <CategoryHeader />
    <CategoryList :list="state.categoryData" />
    <Navbar />
  </div>
</template>
<script setup>
import { onMounted, getCurrentInstance, reactive } from 'vue'
import CategoryHeader from './components/CategoryHeader.vue'
import CategoryList from './components/CategoryList.vue'

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
</script>
<style lang="less">
.category {
  display: flex;
  flex-direction: column;
}
</style>