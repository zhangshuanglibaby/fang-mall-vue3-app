<!--
 * @Date: 2022-12-27 22:11:19
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-03 22:16:41
 * @Description: 这是****文件
-->
<template>
  <div class="create-order">
    <!-- 头部 -->
    <SimpleHeader title="生成订单" @back="deleteCartItemIdsLocal" />
    <!-- 主体内容 -->
    <section class="section">
      <Address :addressData="state.address" @go="handleGo" />
      <GoodsList :list="state.cartList" />
    </section>
    <!-- 生成订单按钮 -->
    <PayBtn :totalPrice="totalPrice" @submit="handleCreateOrder" />
    <!-- 支付方式弹窗 -->
    <van-popup
      v-model:show="state.showPay"
      position="bottom"
      :style="{ height: '30%' }"
      closeable
      @close="handleClose">
      <div class="popop-btn">
        <van-button block color="#1989fa" style="marginBottom: 10px" @click="handlePay(payment.alipay)">支付宝支付</van-button>
        <van-button block color="#4fc08d" @click="handlePay(payment.wxpay)">微信支付</van-button>
      </div>
    </van-popup>
  </div>
</template>
<script setup>
import { onMounted, reactive, getCurrentInstance, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import SimpleHeader from '@/components/global/SimpleHeader.vue'
import Address from './components/Address.vue'
import GoodsList from './components/GoodsList.vue'
import PayBtn from './components/PayBtn.vue'
import { getLocal, setLocal } from '@/common/utils/index'

const route = useRoute()
const router = useRouter()
const { proxy: { $api, $toast } } = getCurrentInstance()
const state = reactive({
  cartList: [],
  address: {},
  showPay: false,
  orderNo: '' // 订单编号
})
// 支付方式
const payment = {
  alipay: 1,
  wxpay: 2
}
onMounted(async () => {
  let { cartItemIds, addressId } = route.query
  cartItemIds = cartItemIds ? JSON.parse(cartItemIds) : JSON.stringify(getLocal('cartItemIds'))
  setLocal('cartItemIds', JSON.stringify(cartItemIds))
  // 路径携带了地址id则获取该地址详情 否则 获取默认地址
  const [ cartList, addressData ] = await Promise.all([$api.cartGetByCartItemIds({ cartItemIds: cartItemIds.join(',') }), addressId ? $api.addressGetAddressDetail(addressId): $api.addressGetDefaultAddress()])
  // 没有地址信息 跳转到地址列表
  if(!addressData) {
    router.push({ path: '/address', query: { from : 'createOrder' } })
    return
  }
  state.cartList = cartList
  state.address = addressData
})

// 商品金额
const totalPrice = computed(() => {
  return state.cartList.reduce((pre, current) => {
    return pre + (current.goodsCount * current.sellingPrice)
  }, 0)
})

// 点击顶部返回
const deleteCartItemIdsLocal = () => {
  // 删除本地缓存的cartItemIds
  setLocal('cartItemIds', '')
}

// 跳转地址管理
const handleGo = () => {
  router.push({ path: '/address', query: { from : 'createOrder' } })
}

// 关闭支付弹窗
const handleClose = () => {
  router.push({ path: '/order' })
  deleteCartItemIdsLocal()
}

// 生成订单
const handleCreateOrder = async () => {
  const params = {
    addressId: state.address.addressId,
    cartItemIds: state.cartList.map(item => item.cartItemId)
  }
  const res = await $api.orderCreateOrder(params)
  state.showPay = true
  state.orderNo = res
}

// 支付
const handlePay = async (payType) => {
  await $api.orderPayOrder({ orderNo: state.orderNo, payType })
  $toast({ type: 'success', message: '支付成功' })
  // 跳转订单页面
  setTimeout(() => {
    router.replace({ path: '/order' })
  })
}
</script>
<style lang="less">
.create-order {
  display: flex;
  flex-direction: column;
  .section {
    flex: 1;
    overflow-y: auto;
  }
  .popop-btn {
    width: 90%;
    margin: 0 auto;
    padding: 100px 0;
  }
}
</style>