<!--
 * @Date: 2022-12-30 13:16:49
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-31 02:01:08
 * @Description: 这是****文件
-->
<template>
  <div class="category-header van-hairline--bottom">
    <van-icon name="arrow-left" @click="back" />
    <div class="header-search">
      <van-icon name="search" class="search-icon" />
      <router-link to="/productList" class="search-title">
        <span>全场50元起步</span>
      </router-link>
    </div>
    <van-icon name="ellipsis" />
  </div>
  <div class="block"></div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const back = () => {
  router.replace({ path: '/' })
}
</script>
<style lang="less" scoped>
.category-header {
  position: fixed;
  left: 0;
  top: 0;
  .wh(100%, 100px);
  line-height: 100px;
  background-color: #fff;
  padding: 0 30px;
  .sc(30px, #656771);
  .fj(space-between);
  .header-search {
    display: flex;
    width: 80%;
    .lh(40px);
    background: #f7f7f7;
    color: #232326;
    border-radius: 40px;
    margin: 20px 0;
    padding: 10px 0;
    .search-icon {
      font-size: 34px;
      padding: 0 20px 0 40px;
    }
    .search-title {
      font-size: 24px;
      color: #666;
      line-height: 42px;
    }
  }
}
.block {
  height: 100px;
}
</style>