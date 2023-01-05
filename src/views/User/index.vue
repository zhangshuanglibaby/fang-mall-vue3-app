<!--
 * @Date: 2022-12-27 22:11:19
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-05 13:12:30
 * @Description: 这是****文件
-->
<template>
  <div class="user pageHeight">
    <SimpleHeader title="我的" />
    <UserHeader />
    <UserList />
    <Navbar />
  </div>
</template>
<script setup>
import UserHeader from './components/UserHeader.vue'
import UserList from './components/UserList.vue'
</script>
<style lang="less"></style>