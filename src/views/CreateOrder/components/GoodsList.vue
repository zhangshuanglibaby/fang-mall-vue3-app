<!--
 * @Date: 2023-01-02 22:58:06
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-02-03 00:24:59
 * @Description: 这是****文件
-->
<template>
  <div class="good-list">
    <div class="good-item" v-for="item in list" :key="item.cartItemId">
      <img class="good-img" :src="$filters.prefix(item.goodsCoverImg)" alt="">
      <div class="good-desc">
        <div class="good-title">
          <span>{{ item.goodsName }}</span>
          <span>x{{ item.goodsCount }}</span>
        </div>
        <div class="good-price">¥{{ item.sellingPrice }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  list: Array
})
</script>
<style lang="less" scoped>
.good-list {
  .good-item {
    .fj(space-between);
    padding: 20px;
    .boxSizing;
    .good-img {
      display: block;
      .wh(200px, 200px);
    }
    .good-desc {
      flex: 1;
      padding: 0 40px;
      .good-title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        span:first-child {
          padding-right: 10px;
        }
      }
    }
    .good-price {
      .sc(32px, red);
      line-height: 56px;
    }
  }
}
</style>