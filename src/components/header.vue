<template>
	<div class="header-bar">
		<span :class='{show: isShow}' @click='backMenu'>&lt;</span>{{title}}
	</div>
</template>
<script>
export default{
	data(){
		return {};
	},
	props:{
		title: {
			type: String
		},
		isShow:{
			type: Boolean,
			default: false
		}
	},
	methods:{
		backMenu(){
			this.$root.$router.back()
		}
	}
}
</script>
<style lang='less' scoped>
.header-bar{
	position: fixed;
	width: 100%;
	left: 0;
	top: 0;
	z-index: 999;
	height: .5rem;
	line-height: .5rem;
	color: #fff;
	font-size: .2rem;
	text-align: center;
	background-color: #00b600;
	span{
		display: none;
		position: absolute;
		top:0;
		left: .2rem;
		&.show{
			display: block;
		}
	}
}
</style>
