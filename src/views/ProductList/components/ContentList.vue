<!--
 * @Date: 2023-01-04 13:14:33
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-04 17:13:24
 * @Description: 这是****文件
-->
<template>
  <div class="content-list">
    <van-pull-refresh :model-value="refreshing" @refresh="onRefresh">
      <van-list
        :model-value="loading"
        :finished="finished"
        :offset="0"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <template v-if="productList.length">
          <div class="product-item" v-for="item in productList" :key="item.goodsId">
            <img :src="$filters.prefix(item.goodsCoverImg)" alt="">
            <div class="product-info">
              <p class="name">{{ item.goodsName }}</p>
              <p class="subtitle">{{ item.goodsIntro }}</p>
              <span class="price">￥ {{ item.sellingPrice }}</span>
            </div>
          </div>
        </template>
        <img v-else class="empty" src="https://s.yezgea02.com/1604041313083/kesrtd.png" alt="搜索" />
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  refreshing: Boolean, // 下拉刷新状态
  finished: Boolean, // 列表是否加载完
  loading: Boolean, // 列表加载状态
  productList: Array // 列表数据
})
console.log(props, 'propspropsprops')
const emit = defineEmits(['load'])
// const { proxy: { $filters } } = getCurrentInstance()
// 下拉刷新
const onRefresh = () => {

}

// 列表加载
const onLoad = () => {
  emit('load')
}

</script>
<style lang="less">
.content-list {
  height: calc(100vh - 100px - 60px);
  overflow-y: auto;
  .product-item {
    .fj(space-between);
    padding: 20px;
    border-bottom: 1px solid #dcdcdc;
    .boxSizing;
    > img {
      display: block;
      .wh(240px, 200px);
    }
    .product-info {
      flex: 1;
      padding-left: 60px;
      .boxSizing;
      overflow: hidden;
      .fcj();
      .name {
        .sc(30px, #333);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .subtitle {
        .sc(26px, #999);
      }
      .price {
        .sc(32px, @primary);
      }
    }
  }
}
.empty {
  display: block;
  width: 300px;
  margin: 100px auto 40px;
}
</style>