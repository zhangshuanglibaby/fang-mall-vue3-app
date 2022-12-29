<!--
 * @Date: 2022-12-28 22:18:13
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-29 17:50:35
 * @Description: 这是****文件
-->
<template>
  <div class="home-good">
    <header class="good-header">{{ title }}</header>
    <van-skeleton title :row="3" :loading="!list">
      <div class="good-box">
        <div class="good-item" v-for="item in list" :key="item.goodsId">
          <img :src="$filters.prefix(item.goodsCoverImg)" alt="">
          <div class="good-desc">
            <div class="title">{{ item.goodsName }}</div>
            <div class="price">¥ {{ item.sellingPrice }}</div>
          </div>
        </div>
      </div>
    </van-skeleton>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
defineProps({
  list: Array,
  title: String
})
</script>
<style lang="less">
.home-good {
  .good-header {
    background: #f9f9f9;
    .lh(100px);
    text-align: center;
    .sc(32px, @primary);
    font-weight: 500;
  }
  .good-box {
    .fj(flex-start);
    flex-wrap: wrap;
    .good-item {
      .boxSizing;
      width: 50%;
      border-bottom: 1px solid #e9e9e9;
      padding: 20px;
      img {
        display: block;
        .wh(240px, 240px);
        margin: 0 auto;
      }
      .good-desc {
        font-size: 28px;
        padding: 20px 0;
        text-align: center;
        .title {
          color: #222333;
        }
        .price {
          color: @primary;
        }
      }
      &:nth-child(odd) {
        border-right: 1px solid #e9e9e9;
      }
    }
  }
}
</style>