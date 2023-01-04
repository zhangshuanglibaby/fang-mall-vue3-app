<!--
 * @Date: 2022-12-27 22:11:19
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-04 20:50:01
 * @Description: 这是****文件
-->
<template>
  <div class="order-detail">
    <SimpleHeader title="订单详情" />
    <OrderStatus :detail="state.detail" @btn="handleBtn" />
    <OrderPrice :detail="state.detail" />
    <van-card
      v-for="item in state.detail.newBeeMallOrderItemVOS"
      :key="item.goodsId"
      :num="item.goodsCount"
      :price="item.sellingPrice"
      desc="优惠商品"
      :title="item.goodsName"
      :thumb="$filters.prefix(item.goodsCoverImg)"
    />
    <!-- 支付方式弹窗 -->
    <van-popup
      v-model:show="state.showPay"
      position="bottom"
      :style="{ height: '30%' }"
      closeable>
      <div class="popop-btn">
        <van-button block color="#1989fa" style="marginBottom: 10px" @click="handlePay(payment.alipay)">支付宝支付</van-button>
        <van-button block color="#4fc08d" @click="handlePay(payment.alipay)">微信支付</van-button>
      </div>
    </van-popup>
  </div>
</template>
<script setup>
import { reactive, getCurrentInstance, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import OrderStatus from './components/OrderStatus.vue'
import OrderPrice from './components/OrderPrice.vue'

const state = reactive({
  showPay: false,
  detail: {} //详情
})
const { proxy: { $api, $dialog, $toast } } = getCurrentInstance()
const route = useRoute()
// 支付方式
const payment = {
  alipay: 1,
  wxpay: 2
}

onMounted(async () => {
  loadData()
})

// 加载数据
const loadData = async () => {
  const { orderNo } = route.query
  const res = await $api.orderGetOrderDetail(orderNo)
  state.detail = res
  console.log(res, 'resres')
}

// 点击操作按钮
const handleBtn = () => {
  const { orderStatus, orderNo } = state.detail
  // 支付
  if(orderStatus === 3) {
    state.showPay = true
    return
  }
  // 确认订单 || 取消订单
  const title = orderStatus === 0 ? '是否确认订单？' : '确认取消订单？'
  const method = orderStatus === 0 ? $api.orderConfirmOrder : $api.orderCancelOrder
  $dialog({ title }).then(async () => {
    await method(orderNo)
    $toast({ type: 'success', message: '操作成功' })
    loadData()
  }).catch(() => {})
}

// 支付
const handlePay = async (payType) => {
  await $api.orderPayOrder({ orderNo: state.detail.orderNo, payType })
  state.showPay = false
  loadData()
}

</script>
<style lang="less" scoped>
.order-detail {
  background: #f7f7f7;
  .van-card {
    background: #fff;
  }
  .popop-btn {
    width: 90%;
    margin: 0 auto;
    padding: 100px 0;
  }
}
</style>