<template>
	<div class="list-container">
		<div class="list-header">
			正在热映
		</div>
		<ul class="list-box">
			<li class='item' v-for='item in list'>
				<router-link :to="{name:'movie-detail',params:{id:item.id}}">
					<img :src=item.images.medium />
					<div class="movie-info">
						<h2>{{item.title}}</h2>
						<div class="star">{{"★★★★★☆☆☆☆☆".slice(5 - parseInt(item.rating.average/2), 10 - parseInt(item.rating.average/2))}} {{item.rating.averaged}}</div>
						<div class="meta">
							<span v-for='cast in item.casts'>{{cast.name}}/</span>
							<span>{{item.genres[0]}}</span>
						</div>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
export default{
	props:{
		list:{
			type: Array
		},
		total:{
			type: Number
		}
	}
}
</script>
<style lang='less'>
.list-container{
	margin-top: .55rem;
	margin-bottom: .55rem;
	width: 100%;
	overflow: auto;
	.list-header{
		width: 100%;
		height: .3rem;
		font-size: .16rem;
		line-height: .3rem;
		box-sizing: border-box;
		padding-left: .06rem;
		color: #515151;
	}
	.list-box{
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		.item{
			width: 100%;
			display: flex;
			box-sizing: border-box;
			padding: .2rem .18rem .2rem;
			border-top: .01rem solid #e6e6e6;
			a{
				display: flex;
				justify-content: flex-end;
				align-items: flex-start;
			}
			img{
				display: block;
				width: 1rem;
				float: left;
				margin-right: .15rem;
			}
			.movie-info{
				flex: 1;
				h2{
					font-size: .16rem;
					line-height: .18rem;
					color: #666;
				}
				.star{
					width: 100%;
					height: .2rem;
					font-size: .12rem;
					line-height: .2rem;
					color: orange;
				}
				.meta{
					width: 100%;
					line-height: .2rem;
					font-size: .12rem;
					color: #00b600;
				}
			}
		}
	}
}
</style>
