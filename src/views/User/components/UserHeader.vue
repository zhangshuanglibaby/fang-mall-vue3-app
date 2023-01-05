<!--
 * @Date: 2022-12-30 11:07:20
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-05 13:49:06
 * @Description: 这是****文件
-->
<template>
  <van-skeleton title avatar :row="3" :loading="!Object.keys($store.state.userInfo).length">
    <div class="user-info">
      <div class="info">
        <img src="https://s.yezgea02.com/1604040746310/aaaddd.png" alt="">
        <div class="user-desc">
          <span>昵称：{{ $store.state.userInfo.nickName }}</span>
          <span>登录名：{{ $store.state.userInfo.loginName }}</span>
          <span>个性签名：{{ $store.state.userInfo.introduceSign }}</span>
        </div>
      </div>
    </div>
  </van-skeleton>
</template>
<script setup>
</script>
<style lang="less" scoped>
.user-info {
  .wh(94%, 230px);
  margin: 20px;
  background: linear-gradient(90deg, @primary, #516bc7);
  box-shadow: 0 2px 5px #4357a2;
  border-radius: 12px;
  .info {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    .boxSizing;
    padding: 50px 40px;
    > img {
      .wh(120px, 120px);
      border-radius: 50%;
    }
    .user-desc {
      display: flex;
      flex-direction: column;
      font-size: 28px;
      line-height: 46px;
      margin-left: 28px;
      color: #fff;
    }
  }
}
</style>