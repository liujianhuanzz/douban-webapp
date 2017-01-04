<template>
	<div class="welcome-page">
		<div class="welcome-text">Hello, Vue!</div>
	</div>
</template>
<script>
export default {
	mounted(){
		setTimeout(()=>{
			this.$router.push({
				name: 'movie'
			})
		}, 2000)
	}
}
</script>
<style lang='less' scoped>
.welcome-page{
	display: flex;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
	.welcome-text{
		font-size: .3rem;
		line-height: .4rem;
		font-weight: 700;
		color: #00b600;
	}
}
</style>
