<!--
 * @Date: 2023-01-02 23:30:16
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-02-03 00:25:05
 * @Description: 这是****文件
-->
<template>
  <div class="pay-btn van-hairline--top">
    <div class="price-wrap">
      <span>商品金额</span>
      <span class="price">¥ {{ totalPrice }}</span>
    </div>
    <van-button class="btn" color="#15429e" block @click="handleCommit">生成订单</van-button>
  </div>
</template>
<script setup>
defineProps({
  totalPrice: Number
})

const emit = defineEmits(['submit'])
// 点击生成订单
const handleCommit = () => {
  emit('submit')
}
</script>
<style lang="less" scoped>
.pay-btn {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  padding: 20px 40px;
  .boxSizing;
  .price-wrap {
    .fj(space-between);
    font-size: 28px;
    padding: 20px 0;
    .price {
      font-size: 36px;
      color: red;
    }
  }
}
</style>