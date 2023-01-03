<!--
 * @Date: 2022-12-27 22:11:19
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-03 22:28:51
 * @Description: 这是****文件
-->
<template>
  <div class="address-edit">
    <SimpleHeader :title="$route.query.type === 'edit' ? '编辑地址' : '新增地址'" />
    <van-address-edit
      :area-list="state.areaList"
      :address-info="state.addressInfo"
      :show-delete="$route.query.type === 'edit'"
      show-set-default
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>
<script setup>
import { reactive, onMounted, getCurrentInstance } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { tdist } from '@/common/utils/index'

const { proxy: { $toast, $api } }  = getCurrentInstance()
const state = reactive({
  areaList: { // 地区选择
    province_list: {},
    city_list: {},
    county_list: {}
  },
  addressInfo: {} // 	地址信息初始值
})
const route = useRoute()
const router = useRouter()
const defaultFlagMap = new Map([
 [ false, 0 ],
 [ true, 1 ],
 [ 0, false ],
 [ 1, true ]
])

// 构造省、市、区地址
const  composeAreaList = () => {
  tdist.getLev1().forEach(p => {
    state.areaList.province_list[p.id] = p.text
    tdist.getLev2(p.id).forEach(c => {
      state.areaList.city_list[c.id] = c.text
      tdist.getLev3(c.id).forEach(q => {
        state.areaList.county_list[q.id] = q.text
      })
    })
  })
}

// 编辑
const editHandler = async () => {
  const addressDetail = await $api.addressGetAddressDetail(route.query.addressId)
  const province = tdist.getLev1()
  let _areaCode = ''
  Object.entries(state.areaList.county_list).forEach(([id, text]) => {
    // 先找到当前对应的区
    if(text === addressDetail.regionName) {
      // 找到对应的省份
      const provinceIndex = province.findIndex(item => item.id.substr(0, 2) === id.substr(0, 2))
      // 找到对应的市区
      const cityItem = Object.entries(state.areaList.city_list).filter(([cityId]) => cityId.substr(0, 4) === id.substr(0, 4))[0]
      // 对比找到的省份和接口是否相同
      if(province[provinceIndex].text === addressDetail.provinceName && cityItem[1] === addressDetail.cityName) {
        _areaCode = id
      }
    }
  })
  // 初始化地址信息展示
  state.addressInfo = {
    id: addressDetail.addressId,
    name: addressDetail.userName,
    tel: addressDetail.userPhone,
    province: addressDetail.provinceName,
    city: addressDetail.cityName,
    county: addressDetail.regionName,
    addressDetail: addressDetail.detailAddress,
    areaCode: _areaCode,
    isDefault: !!addressDetail.defaultFlag
  }
}

onMounted(async () => {
  composeAreaList()
  route.query.type === 'edit' && editHandler()
})

// 保存
const onSave = async (content) => {
  const params = {
    userName: content.name,
    userPhone: content.tel,
    provinceName: content.province,
    cityName: content.city,
    regionName: content.county,
    detailAddress: content.addressDetail,
    defaultFlag: defaultFlagMap.get(content.isDefault)
  }
  if(route.query.type === 'edit') {
    params['addressId'] = route.query.addressId
  }
  $toast({ type: 'success', message: '保存成功' })
  await route.query.type === 'add' ? $api.addressAddAddress(params) : $api.addressEditAddress(params)
  setTimeout(() => {
    router.back()
  }, 600)
}

// 删除
const onDelete = async () => {
  $toast({ type: 'success', message: '删除成功' })
  await $api.addressDeleteAddress(route.query.addressId)
  setTimeout(() => {
    router.back()
  }, 600)
}
</script>
<style lang="less" scoped>
.address-edit {
  /deep/.van-address-edit {
    .van-address-edit__buttons {
      .van-button {
        &:first-child {
          background: @primary;
          border-color: @primary;
        }
      }
    }
    .van-switch--on {
      background: @primary;
    }
  }
}
</style>