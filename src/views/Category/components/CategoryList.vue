<!--
 * @Date: 2022-12-30 13:33:19
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-12-31 01:59:21
 * @Description: 这是****文件
-->
<template>
  <div class="category-list">
    <!-- 左侧边 -->
    <div class="nav-side-wrapper">
      <ListScroll>
        <div class="nav-side">
          <div class="nav-side-item"
            :class="{ active: state.currentIndex === index }"
            v-for="(item, index) in list"
            :key="item.categoryId"
            @click="clickNavSide(index)">{{ item.categoryName }}</div>
        </div>
      </ListScroll>
    </div>
    <!-- 右边 -->
    <div class="search-content">
      <ListScroll @listScroll="handleScroll">
        <div class="list-group" v-for="item in list" :key="item.categoryId" ref="listGrooupRef">
          <div class="list-group-item" v-for="category in item.secondLevelCategoryVOS" :key="category.categoryId">
            <p class="item-title">{{ category.categoryName }}</p>
            <div class="item-product"
              v-for="product in category.thirdLevelCategoryVOS"
              :key="product.categoryId"
              @click="selectProduct(product.categoryId)">
              <img class="product-img" src="//s.weituibao.com/1583591077131/%E5%88%86%E7%B1%BB.png" alt="">
              <p class="product-name">{{ product.categoryName }}</p>
            </div>
          </div>
        </div>
      </ListScroll>
    </div>
  </div>
</template>
<script setup>
import { defineProps, ref, reactive, nextTick, watch } from 'vue';
import { useRouter } from 'vue-router'
import ListScroll from '@/components/modules/ListScroll.vue'

const props = defineProps({
  // 数据
  list: Array
})
const router = useRouter()
const listGrooupRef = ref(null)
const state = reactive({
  currentIndex: 0,
  elementHeightArr: []
})
// 点击左侧菜单
const clickNavSide = (index) => {
  state.currentIndex = index
  nextTick(() => {
    // 定位右侧内容
    const currentElement = listGrooupRef.value[state.currentIndex]
    currentElement.scrollIntoView({ behavior: 'smooth' })
  })
}

// 监听数据的加载
watch(
  () => props.list,
  () => {
  nextTick(() => {
     state.elementHeightArr = []
    let offsetHeightTotal = 0
    listGrooupRef.value.forEach(element => {
      offsetHeightTotal += element.offsetHeight
      state.elementHeightArr.push(offsetHeightTotal)
    })
  })
})

// 监听页面滚动 - 联动左边的菜单
const handleScroll = (scrollTop) => {
  for(let i = 0; i < state.elementHeightArr.length; i++) {
    if(scrollTop >= 0 && scrollTop < state.elementHeightArr[0]) {
      state.currentIndex = 0;
    }else if(scrollTop >  state.elementHeightArr[i - 1] && scrollTop < state.elementHeightArr[i]) {
      state.currentIndex = i
    }
  }
}

// 选择产品
const selectProduct = (categoryId) => {
  router.push({ path: '/productList', query: { categoryId } })

}
</script>
<style lang="less" scoped>
.category-list {
  flex: 1;
  .fj(space-between);
  width: 100%;
  overflow: hidden;
  background: #f8f8f8;
  .nav-side-wrapper {
    width: 28%;
    height: 100%;
    background: #f8f8f8;
    overflow: hidden;
    .nav-side {
      width: 100%;
      background: #f8f8f8;
      .boxSizing;
    }
    .nav-side-item {
      .lh(100px);
      font-size: 28px;
      text-align: center;
      &.active {
        color: @primary;
        background: #fff;
      }
    }
  }
  .search-content {
    flex: 1;
    height: 100%;
    background: #fff;
    .boxSizing;
    padding: 0 20px;
    .list-group {
      .list-group-item {
        display: flex;
        flex-wrap: wrap;
        .item-title {
          font-size: 34px;
          font-weight: 500;
          width: 100%;
          margin-bottom: 60px;
        }
        .item-product {
          width: 33.33%;
          margin-bottom: 20px;
          font-size: 30px;
          text-align: center;
          .product-img {
            .wh(60px, 60px);
          }
        }
      }
    }
  }
}
</style>