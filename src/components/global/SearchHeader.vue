<!--
 * @Date: 2023-01-04 12:45:31
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-04 16:46:36
 * @Description: 这是****文件
-->
<template>
  <div class="search-header van-hairline--bottom">
    <slot name="left">
      <van-icon name="arrow-left" @click="back" />
    </slot>
    <div class="header-search" @click="handleClick">
      <van-icon name="search" class="search-icon" />
      <input
        type="text"
        class="search-title"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"/>
    </div>
    <slot name="right">
      <van-icon name="ellipsis" />
    </slot>
  </div>
  <div class="block"></div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue'
import { useRouter } from 'vue-router'

defineProps({
  modelValue: String,
  placeholder: String
})
const emit = defineEmits(['update:modelValue', 'to'])
const router = useRouter()

const back = () => {
  // router.replace({ path: '/' })
  router.back()
}

const handleClick = () => {
  emit('to')
}
</script>
<style lang="less" scoped>
.search-header {
  position: fixed;
  left: 0;
  top: 0;
  .wh(100%, 100px);
  line-height: 100px;
  background-color: #fff;
  padding: 0 30px;
  .sc(30px, #656771);
  .fj(space-between);
  .boxSizing;
  z-index: 1000;
  .header-search {
    display: flex;
    flex: 1;
    .lh(40px);
    background: #f7f7f7;
    color: #232326;
    border-radius: 40px;
    margin: 20px;
    padding: 10px;
    .search-icon {
      font-size: 34px;
      padding: 0 20px 0 40px;
    }
    .search-title {
      flex: 1;
      .sc(24px, #666);
      line-height: 42px;
      background: #f7f7f7;
    }
  }
}
.block {
  height: 100px;
}
</style>