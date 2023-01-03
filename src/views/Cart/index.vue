<!--
 * @Date: 2022-12-27 22:11:19
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-03 22:27:22
 * @Description: 这是****文件
-->
<template>
  <div class="cart pageHeight">
    <SimpleHeader title="购物车" noBack/>
    <CartContent
      v-if="state.cartList.length"
      :list="state.cartList"
      @update="handleUpdate"
      @delete="handleDelete"
      @submit="handleSubmit" />
    <Empty v-else />
    <Navbar />
  </div>
</template>
<script setup>
import { reactive, onMounted, getCurrentInstance } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import CartContent from './components/CartContent.vue'
import Empty from './components/Empty.vue'

const store = useStore()
const router = useRouter()
const state = reactive({
  cartList: []
})
const { proxy: { $api } } = getCurrentInstance()
onMounted(async () => {
  const res = await $api.cartGetCart({ pageNumber: 1 })
  state.cartList = res
  store.commit('update', { key: 'cartCount', value: res.length })
})

// 监听更改数量
const handleUpdate = ({ count, cartItemId }) => {
  $api.cartModifyCart({ cartItemId, goodsCount: count })
  const targeet = state.cartList.find(item => item.cartItemId === cartItemId)
  targeet.goodsCount = count
}

// 监听删除商品
const handleDelete = async (cartItemId) => {
  await $api.cartDeleteCartItem(cartItemId)
  const index = state.cartList.findIndex(item => item.cartItemId === cartItemId)
  state.cartList.splice(index, 1)
  store.commit('update', { key: 'cartCount', value: state.cartList.length })
}

// 监听提交
const handleSubmit = (result) => {
  const params = JSON.stringify(result)
  router.push({ path: '/CreateOrder', query: { cartItemIds: params} })
}
</script>
<style lang="less"></style>