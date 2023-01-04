<!--
 * @Date: 2022-12-27 22:11:19
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-04 19:28:14
 * @Description: 这是****文件
-->
<template>
  <div class="order">
    <SimpleHeader title="我的订单" />
    <van-tabs
      class="order-tab van-hairline--bottom"
      color="#15429e"
      title-active-color="#15429e"
      @change="onChangeTab">
      <van-tab v-for="item in tabList" :key="item.value" :title="item.label" :name="item.value"></van-tab>
    </van-tabs>
    <div class="content">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          :offset="0"
          @load="onLoad"
        >
          <div class="order-item" v-for="item in list" :key="item.orderId" @click="goTo(item.orderNo)">
            <div class="order-item-header">
              <span>订单时间：{{ item.createTime }}</span>
              <span>{{ item.orderStatusString }}</span>
            </div>
            <van-card
              v-for="good in item.newBeeMallOrderItemVOS"
              :key="good.goodsId"
              :num="good.goodsCount"
              :price="good.sellingPrice"
              desc="优惠商品"
              :title="good.goodsName"
              :thumb="$filters.prefix(good.goodsCoverImg)"
            />
          </div>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>
<script setup>
import { reactive, getCurrentInstance, toRefs } from 'vue'
import { useRouter } from 'vue-router'
const tabList = [
  { label: '全部', value: '' },
  { label: '待付款', value: '0' },
  { label: '待确认', value: '0' },
  { label: '待发货', value: '2' },
  { label: '已发货', value: '3' },
  { label: '交易完成', value: '4' },
]
const state = reactive({
  status: '', // 当前状态
  refreshing: false, // 下拉刷新状态
  loading: false, // 列表加载状态
  finished: false, // 列表是否加载完毕
  list: [], // 列表数据
  page: {
    pageNum: 1,
    totalPage: 0
  }
})
const router = useRouter()
const { proxy: { $api } } = getCurrentInstance()


// 加载数据
const loadData = async () => {
  const params = {
    pageNumber: state.page.pageNum,
    status: state.status
  }
  const res = await $api.orderGetOrderList(params)
  state.list = [...state.list, ...res.list]
  state.page.totalPage = res.totalPage
  state.loading = false
  if(state.page.pageNum >= res.totalPage) {
    state.finished = true
  }
}

// 更改tab
const onChangeTab = (value) => {
  state.status = value
  onRefresh()
}

// 下拉
const onRefresh = () => {
  state.refreshing = true
  state.finished = false
  state.loading = false
  state.page.pageNum = 1
  onLoad()
}

// 列表加载
const onLoad = () => {
  console.log('列表加载了')
  if(!state.refreshing && state.page.pageNum < state.page.totalPage) {
    state.page.pageNum += 1
  }
  if(state.refreshing) {
    state.list = []
    state.refreshing = false
  }
  loadData()
}

// 跳转订单详情
const goTo = (orderNo) => {
  router.push({ path: '/orderDetail', query: { orderNo } })
}
const { refreshing, loading, finished, list } = toRefs(state)
</script>
<style lang="less" scoped>
.order {
  .order-tab {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 1000;
  }
  .content {
    padding-top: 100px;
    height: calc(100vh - 100px - 45px);
    overflow-y: scroll;
    .order-item {
      .order-item-header {
        .fj(space-between);
        padding: 20px 40px 0;
      }
      .van-card {
        background: #fff;
      }
    }
  }
}
</style>