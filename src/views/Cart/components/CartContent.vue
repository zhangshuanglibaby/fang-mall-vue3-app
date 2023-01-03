<!--
 * @Date: 2023-01-01 10:15:35
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-02 16:20:50
 * @Description: 这是****文件
-->
<template>
  <div class="cart-content">
    <van-checkbox-group v-model="checkList" @change="groupChange">
      <van-swipe-cell v-for="item in props.list" :key="item.cartItemId">
        <div class="good-item">
          <van-checkbox :name="item.cartItemId"></van-checkbox>
          <div class="good-img">
            <img :src="$filters.prefix(item.goodsCoverImg)" alt="">
          </div>
          <div class="good-desc">
            <div class="good-title">
              <span>{{ item.goodsName }}</span>
              <span>x{{ item.goodsCount }}</span>
            </div>
            <div class="good-btn">
              <div class="price">¥{{ item.sellingPrice }}</div>
              <van-stepper
                integer
                :min="1"
                :max="5"
                :name="item.cartItemId"
                :model-value="item.goodsCount"
                @change="updateCount" />
            </div>
          </div>
        </div>
        <template #right>
          <van-button
          square
          type="danger"
          icon="delete"
          class="delete-button"
          @click="deleteGood(item.cartItemId)" />
        </template>
      </van-swipe-cell>
    </van-checkbox-group>
    <van-submit-bar
      class="submit-bar van-hairline--top"
      :price="totalPrice * 100"
      button-text="结算"
      button-color="#15429e"
      @submit="onSubmit">
      <van-checkbox
        v-model="checkAll"
        @click="allChange">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>
<script setup>
import { defineProps, toRefs, reactive, getCurrentInstance, defineEmits, computed } from 'vue'
const props = defineProps({
  list: Array
})
const emit = defineEmits(['delete', 'update', 'submit'])
const { proxy: { $toast } } = getCurrentInstance()
const state = reactive({
  checkList: [], // 选中的id集合
  checkAll: true // 是否选中
})
state.checkList = props.list.map(item => item.cartItemId)

// 更改数量
const updateCount = (count, { name }) => {
  emit('update', { count, cartItemId: name })
}
// 选择复选框
const groupChange = (value) => {
  state.checkAll = value.length === props.list.length // 选中的长度 = 购物车数量的长度 就是全选
  state.checkList = value
}
// 选择全选
const allChange = () => {
  if(state.checkAll) {
    // 全选
    state.checkList = props.list.map(item => item.cartItemId)
    return
  }
  // 取消选中 则直接返回空的选中集合
  state.checkList = []
}

// 删除商品
const deleteGood = (cartItemId) => {
  const index = state.checkList.findIndex(item => item.cartItemId === cartItemId)
  state.checkList.splice(index, 1)
  emit('delete', cartItemId)
}

// 结算
const onSubmit = () => {
  if(!state.checkList.length) {
    $toast({ type: 'fail', message: '请选择商品进行结算！' })
    return
  }
  emit('submit', state.checkList)
}

// 总价格
const totalPrice = computed(() => {
  let total = 0
  props.list.forEach(item => {
    total += (item.goodsCount * item.sellingPrice)
  })
  return total
})

const { checkList, checkAll } = toRefs(state)
</script>
<style lang="less">
.cart-content {
  margin: 32px 0 200px 0;
  padding-left: 20px;
  .good-item {
    display: flex;
    .good-img img {
      .wh(200px, 200px);
    }
    .good-desc {
      flex: 1;
      .fcj();
      padding: 40px;
    }
    .good-title {
      display: flex;
      justify-content: space-between;
    }
    .good-btn {
      .fj(space-between);
    }
    .price {
      font-size: 32px;
      color: red;
      line-height: 56px;
    }
  }
  .delete-button {
    .wh(100px, 100%);
  }
  .submit-bar {
    margin-bottom: 90px;
  }
}
</style>