<!--
 * @Date: 2023-01-04 20:02:35
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-02-03 00:25:25
 * @Description: 这是****文件
-->
<template>
	<div class="order-price">
		<div class="price-item">
			<label>商品金额：</label>
			<span>¥ {{ detail.totalPrice}}</span>
		</div>
		<div class="price-item">
			<label>配送方式：</label>
			<span>普通快递</span>
		</div>
	</div>
</template>
<script setup>
defineProps({
	detail: Object
})
</script>
<style lang="less">
.order-price {
	background: #fff;
	padding: 40px;
	margin: 40px 0;
	font-size: 30px;
	.price-item {
		margin-bottom: 20px;
		label {
			color: #999;
		}
	}
}
</style>