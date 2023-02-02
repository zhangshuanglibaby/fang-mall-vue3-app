<!--
 * @Date: 2023-01-04 19:54:46
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-02-03 00:25:33
 * @Description: 这是****文件
-->
<template>
  <div class="order-status">
    <div class="status-item">
      <label>订单状态：</label>
      <span>{{ detail.orderStatusString }}</span>
    </div>
    <div class="status-item">
      <label>订单编号：</label>
      <span>{{ detail.orderNo }}</span>
    </div>
    <div class="status-item">
      <label>下单时间：</label>
      <span>{{ detail.payTime}}</span>
    </div>
    <van-button block @click="$emit('btn')">{{ buttonText }}</van-button>
  </div>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps({
  detail: Object
})

const buttonText = computed(() => {
  switch (props.detail.orderStatus) {
    case 3:
      return '确认支付'
    case 0:
      return '去支付'
    default:
      return '取消订单'
  }
})
</script>
<style lang="less">
.order-status {
  padding: 40px;
  font-size: 30px;
  background: #fff;
  .status-item {
    margin-bottom: 20px;
    label {
      color: #999;
    }
  }
}
</style>