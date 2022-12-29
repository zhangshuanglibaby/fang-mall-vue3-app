<!--
 * @Date: 2022-12-29 20:40:06
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-29 20:50:56
 * @Description: 这是****文件
-->
<template>
  <div>
    <van-form>
      <van-field
        v-model="loginForm.username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="loginForm.password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-form>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
const loginForm = reactive({
  username: '', // 用户名
  password: '', // 密码
  verify: '' // 验证码
})
</script>