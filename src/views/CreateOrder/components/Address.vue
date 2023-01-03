<!--
 * @Date: 2023-01-02 22:45:35
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-03 21:49:15
 * @Description: 这是****文件
-->
<template>
  <div class="address" @click="$emit('go')">
    <div class="left-wrap">
      <div class="name">
        <span>{{ addressData.userName }}</span>
        <span>{{ addressData.userPhone }}</span>
      </div>
      <div class="address-detail">
        {{ addressData.provinceName}} {{ addressData.cityName }} {{ addressData.regionName }} {{ addressData.detailAddress }}
       </div>
    </div>
    <van-icon name="arrow" class="arrow-icon" />
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
defineProps({
  addressData: Object
})
</script>
<style lang="less" scoped>
.address {
  position: relative;
  .fj(space-between);
  padding: 30px;
  .boxSizing;
  .sc(28px, #222333);
  margin-bottom: 40px;
  .left-wrap {
    flex: 1;
  }
  .name, .address-detail {
    margin: 20px 0;
  }
  .arrow-icon {
    font-size: 40px;
  }
  &::before {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 4px;
    background: -webkit-repeating-linear-gradient(135deg, #ff6c6c 0, #ff6c6c 20%, transparent 0, transparent 25%, #1989fa 0, #1989fa 45%, transparent 0, transparent 50%);
    background: repeating-linear-gradient(-45deg, #ff6c6c 0, #ff6c6c 20%, transparent 0, transparent 25%, #1989fa 0, #1989fa 45%, transparent 0, transparent 50%);
    background-size: 160px;
    content: '';
  }
}
</style>