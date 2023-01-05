<!--
 * @Date: 2022-12-27 22:11:19
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-05 13:50:15
 * @Description: 这是****文件
-->
<template>
  <div class="setting">
    <SimpleHeader title="账号管理" />
    <div class="input-wrap">
      <van-field v-model="state.nickName" label="昵称" />
      <van-field v-model="state.introduceSign" label="个性签名" />
      <van-field v-model="state.password" label="修改密码" />
    </div>
    <div class="btn-wrap">
      <van-button class="btn" block round color="#15429e" @click="handleSave">保存</van-button>
      <van-button class="btn" block round color="#15429e" @click="handleLogout">退出登录</van-button>
    </div>
  </div>
</template>
<script setup>
import { reactive, watch, getCurrentInstance } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const { proxy: { $api, $md5, $toast } } = getCurrentInstance()
const router = useRouter()
const state = reactive({
  nickName: store.state.userInfo.nickName, // 昵称
  introduceSign: store.state.userInfo.introduceSign, // 个性签名
  password: '' // 密码
})
// 监听用户信息的获取
watch(
  () => store.state.userInfo,
  () => {
    state.nickName = store.state.userInfo.nickName
    state.introduceSign = store.state.userInfo.introduceSign
  }
)

// 保存
const handleSave = async () => {
  if(state.password) {
    state.password = $md5(state.password)
  }
  await $api.userEditUserInfo(state)
  // 更新用户信息
  store.commit('update', { key: 'userInfo', value: {}})
  store.dispatch('setUserInfo')
  $toast({ type: 'success', message: '保存成功' })
  setTimeout(() => {
    router.back()
  }, 1000)
}

// 退出登录
const handleLogout = async () => {
  await $api.userLogout()
  // 清空token
  store.commit('setToken', '')
  // 返回登陆页
  router.replace({ path: '/login' })
}
</script>
<style lang="less" scoped>
.setting {
  .btn {
    width: 80%;
    margin: 40px auto;
  }
}
</style>