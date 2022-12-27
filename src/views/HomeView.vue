<!--
 * @Date: 2022-12-27 20:44:17
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-27 21:59:11
 * @Description: 这是****文件
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
