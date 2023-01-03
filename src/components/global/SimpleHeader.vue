<!--
 * @Date: 2022-12-29 17:30:52
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-02 22:47:12
 * @Description: 这是****文件
-->
<template>
  <header class="simple-header van-hairline--bottom">
    <div class="header-icon">
      <van-icon v-show="!noBack" name="arrow-left" @click="goBack" />
    </div>
    <span class="simple-header-name">{{ title }}</span>
    <div class="header-icon">
      <van-icon name="weapp-nav" />
    </div>
  </header>
  <!-- 这是空盒子 -->
  <div class="block"></div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({
  title: { // 标题
    type: String,
    default: ''
  },
  back: String, // 返回的路径
  noBack: { // 有无返回
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['back'])
const router = useRouter()
// 返回
const goBack = () => {
  emit('back')
  if(!props.back) { // 无设置返回路径
     return router.go(-1)
  }
  router.push({ path: props.back })
}
</script>
<style lang="less" scoped>
.simple-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  .wh(100, @headerHeight);
  .fj(space-between);
  .boxSizing;
  padding: 0 20px;
  font-size: 32px;
  background: #fff;
  z-index: 1000;
  .simple-header-name {
    font-size: 28px;
  }
  .header-icon {
    height: 100%;
    width: 40px;
    line-height: @headerHeight;
  }
}
.block {
  height: @headerHeight;
}
</style>