<!--
 * @Date: 2022-12-27 22:11:19
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-31 23:15:47
 * @Description: 这是****文件
-->
<template>
  <div>
    <SimpleHeader title="商品详情" />
    <DetailContent :data="detail" />
    <!-- 底部的按钮 -->
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" />
      <van-action-bar-icon icon="cart-o" text="购物车" :badge="count || ''" @click="router.push({ path: '/cart' })" />
      <van-action-bar-button color="#285ec9" type="warning" text="加入购物车" @click="handleAddCart('add')" />
      <van-action-bar-button color="#15429e" type="danger" text="立即购买" @click="handleAddCart('buy')" />
    </van-action-bar>
  </div>
</template>
<script setup>
import { onMounted, reactive, getCurrentInstance, toRefs, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { getDetail } from '@/service/good'
import { addCart } from '@/service/cart'
import DetailContent from './components/DetailContent.vue'

const route = useRoute()
const router = useRouter()
const store = useStore()
const { proxy: { $filters, $toast } } = getCurrentInstance()
let state = reactive({
  detail: {}
})

onMounted( async () => {
  const { goodsId } = route.query
  const res = await getDetail(goodsId)
  res.goodsCarouselList.forEach(item => $filters.prefix(item.goodsCarouselList))
  state.detail = res
  store.dispatch('updateCart')
})
const { detail } = toRefs(state)

// 加入购物车 | 加入购物车
const handleAddCart = async (type) => {
  await addCart({ goodsCount: 1, goodsId: detail.value.goodsId})
  store.dispatch('updateCart')
  switch (type) {
    case 'add': // 加入购物车
      $toast({ type: 'success', message: '添加成功' })
      break;
    case 'buy':
      router.push({ path: '/cart' })
      break;
  }
}
const count = computed(() => {
  return store.state.cartCount
})
</script>
<style lang="less"></style>