<!--
 * @Date: 2023-01-01 00:03:40
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-01 00:11:37
 * @Description: 这是****文件
-->
<template>
  <div class="empty">
    <img class="empty-img" src="https://s.yezgea02.com/1604028375097/empty-car.png" alt="">
    <div class="title">购物车空空如也</div>
    <van-button color="#15429e" block round @click="router.push({ path: '/' })">前往选购</van-button>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<style lang="less">
.empty {
  width: 50%;
  margin: 0 auto;
  text-align: center;
  margin-top: 400px;
  .empty-img {
    width: 300px;
    margin-bottom: 40px;
  }
  .title {
    font-size: 32px;
    margin-bottom: 40px;
  }
}
</style>