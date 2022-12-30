<!--
 * @Date: 2022-12-30 13:45:10
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-31 01:24:49
 * @Description: 这是****文件
-->
<template>
  <div ref="wrapper" class="scroll-wrapper" @scroll="handleScroll">
    <slot></slot>
  </div>
</template>
<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['listScroll'])
const handleScroll = (e) => {
  emit('listScroll', e.target.scrollTop)
}
</script>
<style lang="less" scoped>
.scroll-wrapper {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  touch-action: pan-y;
}
</style>