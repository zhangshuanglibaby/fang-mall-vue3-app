<!--
 * @Date: 2022-12-27 22:11:19
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-03 22:26:14
 * @Description: 这是****文件
-->
<template>
  <div class="address">
    <SimpleHeader title="地址管理" />
    <van-address-list
      :list="state.list"
      default-tag-text="默认"
      @add="handleAdd"
      @edit="handleEdit"
      @select="handleSelect" />
  </div>
</template>
<script setup>
import { onMounted, reactive, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const state = reactive({
  list: []
})
const { proxy: { $api } } = getCurrentInstance()

onMounted(async () => {
  const res = await $api.addressGetAddressList()
  state.list = res.map(item => {
    return {
      id: item.addressId,
      name: item.userName,
      tel: item.userPhone,
      address: `${item.provinceName} ${item.cityName} ${item.regionName} ${item.detailAddress}`,
      isDefault: !!item.defaultFlag
    }
  })
})

// 新增地址
const handleAdd = () => {
  console.log('新增地址')
  router.push({ path: '/addressEdit', query: { type: 'add' } })
}

// 编辑地址
const handleEdit = (record) => {
  router.push({ path: '/addressEdit', query: { type: 'edit', addressId: record.id } })
}

// 选择地址
const handleSelect = () => {
  if(route.query.from === 'createOrder') {
    router.back()
    return
  }
}
</script>
<style lang="less" scoped>
.address {
  /deep/.van-radio__icon {
    display: none;
  }
  /deep/.van-tag--primary {
    background: red;
  }
  /deep/.van-button {
    background: @primary;
  }
}
</style>