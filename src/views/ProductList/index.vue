<!--
 * @Date: 2022-12-27 22:11:19
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-04 17:38:22
 * @Description: 这是****文件
-->
<template>
  <div class="product-list">
    <SearchHeader v-model="searchText">
      <template #right>
        <van-button type="primary" size="small" @click="onRefresh">搜索</van-button>
      </template>
    </SearchHeader>
    <van-tabs type="card" color="#15429e" @change="changeTab">
      <van-tab v-for="item in tabList" :key="item.name" :title="item.title" :name="item.name"></van-tab>
    </van-tabs>
    <ContentList v-bind="listObj"  @load="handleLoad" />
  </div>
</template>
<script setup>
import { reactive, toRefs, getCurrentInstance } from 'vue'
import { useRoute } from 'vue-router'
import ContentList from './components/ContentList.vue'

const tabList = [
  { title: '推荐', name: ''},
  { title: '新品', name: 'new'},
  { title: '价格', name: 'price'}
]
const { proxy: { $api } } = getCurrentInstance()
const route = useRoute()
const state = reactive({
  searchText: '', // 搜索内容
  listObj: {
    refreshing: false, // 下拉刷新状态
    loading: false, // 列表加载状态
    finished: true ,// 列表是否加载完
    productList: [] // 列表数据
  },
  pageObj: {
    pageNum: 1,
    totalPage: 0,
    orderBy: ''
  }
})

const initData = async () => {
  const { categoryId } = route.query
  if(!categoryId && !state.searchText) {
    listObj.finished = true
    listObj.loading = false
    return
  }
  const params = {
    pageNumber: state.pageObj.pageNum,
    goodsCategoryId: categoryId,
    keyword: state.searchText,
    orderBy: state.pageObj.orderBy
  }
  const res = await $api.goodSearchGood(params)
  // 新旧数据合并
  state.listObj.productList = [...state.listObj.productList, ...res.list]
  state.pageObj.totalPage = res.totalPage
  state.listObj.loading = false
  state.listObj.finished = false
  if(state.pageObj.pageNum >= state.pageObj.totalPage) {
    state.listObj.finished = true
  }
}

// 切换标签页
const changeTab = (value) => {
  state.pageObj.orderBy = value
  onRefresh()
}

// 列表加载
const handleLoad = () => {
  if(!state.refreshing && state.pageObj.pageNum < state.pageObj.totalPage) {
    state.pageObj.pageNum += 1
  }
  if(state.refreshing) {
    state.listObj.productList = []
    state.refreshing = !state.refreshing
  }
  initData()  
}

// 刷新
const onRefresh = () => {
  state.refreshing = true
  state.finished = false
  state.loading = true
  state.pageObj.pageNum = 1
  handleLoad() 
}
const { searchText, listObj } = toRefs(state)
</script>
<style lang="less" scoped>
.product-list {
  /deep/.van-button--primary {
    background: @primary;
  }
}
</style>