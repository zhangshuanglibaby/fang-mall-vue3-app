<!--
 * @Date: 2022-12-27 22:11:19
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-29 20:40:59
 * @Description: 这是****文件
-->
<template>
  <div class="login">
    <SimpleHeader title="登录" back="/home" />
    <img class="logo" src="https://s.yezgea02.com/1604045825972/newbee-mall-vue3-app-logo.png" alt="" />
    <LoginForm />
  </div>
</template>
<script setup>
import LoginForm from './components/LoginForm.vue'
</script>
<style lang="less">
.login {
  .logo {
    display: block;
    .wh(240px, 240px);
    margin: 160px auto 40px;
  }
}
</style>