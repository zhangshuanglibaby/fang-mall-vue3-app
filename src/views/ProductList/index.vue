<!--
 * @Date: 2022-12-27 22:11:19
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-05 23:55:59
 * @Description: 这是****文件
-->
<template>
  <div class="product-list">
    <SearchHeader v-model="searchText">
      <template #right>
        <van-button type="primary" size="small" @click="onRefresh">搜索</van-button>
      </template>
    </SearchHeader>
    <van-tabs type="card" color="#15429e" @click-tab="changeTab">
      <van-tab v-for="item in tabList" :key="item.name" :title="item.title" :name="item.name"></van-tab>
    </van-tabs>
    <div class="content-list">
      <van-pull-refresh v-model="state.listObj.refreshing" @refresh="onRefresh">
        <ContentList v-bind="listObj" @refresh="onRefresh"  @load="handleLoad" />
      </van-pull-refresh>
    </div>
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
    finished: false ,// 列表是否加载完
    productList: [] // 列表数据
  },
  pageObj: {
    pageNum: 0,
    totalPage: 0,
    orderBy: ''
  }
})

const initData = async () => {
  const { categoryId } = route.query
  if(!categoryId && !state.searchText) {
    state.listObj.finished = true
    state.listObj.loading = false
    return
  }
  state.listObj.loading = true
  state.listObj.finished = false
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
  // 没有数据
  if(!state.listObj.productList.length) {
    state.listObj.finished = true
    return
  }
  // 数据加载完毕
  if(state.pageObj.pageNum >= state.pageObj.totalPage) {
    state.listObj.finished = true
  }
  state.listObj.loading = false
  console.log(state.listObj, 'listObjlistObj')
}

// 切换标签页
const changeTab = ({ name }) => {
  state.pageObj.pageNum = 1
  state.pageObj.orderBy = name
  state.listObj.productList = []
  state.listObj.loading =false
  initData()
}

// 列表加载
const handleLoad = () => {
  state.pageObj.pageNum++
  initData()
}

// 刷新
const onRefresh = () => {
  state.listObj.refreshing = false
  state.listObj.finished = false
  state.listObj.loading = false
  state.pageObj.pageNum = 0
  state.listObj.productList = []
}
const { searchText, listObj } = toRefs(state)
</script>
<style lang="less" scoped>
.product-list {
  /deep/.van-button--primary {
    background: @primary;
  }
  .content-list {
    height: calc(100vh - 100px - 60px);
    overflow-y: auto;
  }
}
</style>