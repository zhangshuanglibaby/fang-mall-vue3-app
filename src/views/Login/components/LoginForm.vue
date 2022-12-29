<!--
 * @Date: 2022-12-29 20:40:06
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-29 23:28:00
 * @Description: 这是****文件
-->
<template>
  <div class="login-form">
    <van-form @submit="onSubmit">
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
      <van-field
        v-model="loginForm.verify"
        center
        clearable
        name="verify"
        label="验证码"
        placeholder="验证码">
        <template #button>
          <VueImageVerify ref="verifyRef" />
        </template>
      </van-field>
      <div class="btn-footer">
        <div class="link-desc" @click="toggle">{{ isLogin ? '立即注册' : '已有登录账号'}}</div>
        <van-button block round color="#15429e" native-type="submit">{{ isLogin ? '登录' : '注册' }}</van-button>
      </div>
    </van-form>
  </div>
</template>
<script setup>
import { reactive, ref, getCurrentInstance } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import VueImageVerify from '@/components/modules/VueImageVerify.vue'
import { login, register } from '@/service/user'

const store = useStore()
const router = useRouter()
const verifyRef = ref(null)
const { proxy: { $toast, $md5 } } = getCurrentInstance()
const loginForm = reactive({
  username: '', // 用户名
  password: '', // 密码
  verify: '' // 验证码
})
const isLogin = ref(false) // 默认状态是注册

// 切换登录和注册两种模式
const toggle = () => {
  isLogin.value = !isLogin.value
  loginForm.verify = '' // 清空验证码
  verifyRef.value.handleDraw() // 重新生成验证码
}

// 提交
const onSubmit = async (value) => {
  const { username, password } = value
  // 判断验证码
  let imgCode = verifyRef.value.imgCode.toLowerCase()
  if(loginForm.verify.toLowerCase() !== imgCode) {
    $toast({ type: 'fail', message: '验证码有误！' })
    return
  }
  // 判断是登录 or 注册状态
  const method = isLogin.value ? login : register
  const params = {
    loginName: username
  }
  isLogin.value ? (params.passwordMd5 = $md5(password)) : (params.password = password)
  const res = await method(params)
  $toast({ type: 'succcess', message: '成功！' })
  if(isLogin.value) { // 登陆状态
    store.commit('setToken', res) // 缓存token
    router.replace({ path: '/' }) // 跳到首页
    return
  }
  // 注册状态 - 需要切换为登录状态
  toggle()
}

</script>
<style lang="less">
.login-form {
  padding: 0 40px;
  .btn-footer {
    margin: 32px;
    .link-desc {
      font-size: 28px;
      color: #1989fa;
      margin-bottom: 40px;
    }
  }
}
</style>