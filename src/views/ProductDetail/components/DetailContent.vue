<!--
 * @Date: 2022-12-31 13:55:00
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-02-03 00:25:39
 * @Description: 这是****文件
-->
<template>
  <div class="detail-content">
    <!-- 商品轮播图 -->
    <div class="swipe-wrap">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in data.goodsCarouselList" :key="index">
          <img :src="item" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 商品信息 -->
    <div class="product-info">
      <div class="product-title">
        {{ data.goodsName }}
      </div>
      <div class="product-desc">免邮费 顺丰快递</div>
      <div class="product-price">
        <span>¥ {{ data.sellingPrice }}</span>
      </div>
    </div>
    <!-- 商品介绍 -->
    <div class="product-intro">
      <div class="service-list">
        <div
          class="service-list-item"
          v-for="(item, index) in serviceList"
          :key="index">{{ item }}</div>
      </div>
      <div class="product-content" v-html="data.goodsDetailContent"></div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  data: Object // 详情数据
})
const serviceList = ['概述', '参数', '安装服务', '常见问题']
</script>
<style lang="less" scoped>
.detail-content {
  padding-bottom: 100px;
  .swipe-wrap {
    .my-swipe img {
      width: 100%;
    }
  }
  .product-info {
    padding: 0 20px;
    text-align: left;
    .product-title {
      .sc(36px, #333);
    }
    .product-desc {
      .sc(28px, #999);
      padding: 10px 0;
    }
    .product-price {
      .sc(44px, #F63515);
    }
  }
  .product-intro {
    .service-list {
      .fj(space-between);
      margin: 20px 0;
    }
    .service-list-item {
      flex: 1;
      text-align: center;
      font-size: 30px;
      .boxSizing;
      &:not(:last-child) {
        border-right: 1px solid #999;
      }
    }
    .product-content {
      padding: 0 40px;
      img {
        width: 100%;
      }
    }
  }
}
</style>