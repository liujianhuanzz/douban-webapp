<template>
	<div class="detail">
		<page-header :title='movieInfo.title' :isShow='back_show'></page-header>
		<article class="movie-info">
			<div class='movie-poster'>
				<img :src='movieInfo.movie_poster' alt>
			</div>
			<section class='movie-detail'>
				<div class='movie-title'>{{movieInfo.title}}</div>
				<div class='movie-star'>
					<span style='color: orange'>{{"★★★★★☆☆☆☆☆".slice(5 - parseInt(movieInfo.movie_star/2), 10 - parseInt(movieInfo.movie_star/2))}} {{movieInfo.movie_star}}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style='color: orange'>{{movieInfo.movie_count}}</span>人已评价
				</div>
				<div class='movie-casts'>
					<template v-for='item in movieInfo.movie_directors'>
						<span>{{item.name}}/</span>
					</template>
					<template v-for='(list, index) in movieInfo.movie_casts'>
						<span v-if='index < (movieInfo.movie_casts.length - 1)'>{{list.name}}/</span>
						<span v-else>{{list.name}}</span>
					</template>
				</div>
				<div class='movie-type'>
					<template v-for='(item, index) in movieInfo.movie_type'>
						<span v-if='index < (movieInfo.movie_type.length - 1)'>{{movieInfo.movie_type[index]}}/</span>
						<span v-else>{{movieInfo.movie_type[index]}}</span>
					</template>

				</div>
				<div class='movie-summary'>
					<p style='color: #00b600;'>故事简介：</p>{{movieInfo.movie_summary}}
				</div>
			</section>
		</article>
		<loader :loader_show='loader_show'></loader>
	</div>
</template>
<script>
import Loader from '../components/loading.vue'
import PageHeader from '../components/header.vue'
import PageFooter from '../components/footer.vue'
import {mapState} from 'vuex'

export default{
	data(){
		return {
			back_show: true
		}
	},
	components:{
		'page-header': PageHeader,
		'page-footer': PageFooter,
		'loader': Loader
	},
	computed:{
		...mapState({
			'loader_show': 'loader_show',
			'movieInfo': 'movieInfo'
		})
	},
	created(){
		this.getMovieId();
		this.$store.dispatch('showLoading')
		this.$store.dispatch('setMovieInfo', {id: this.movie_id, context: this})
	},
	methods:{
		getMovieId(){
			let url = window.location.href;
			this.movie_id = url.split('movie/')[1];
		}
	}
}
</script>
<style lang='less' scoped>
.movie-info{
	position: relative;
	float: left;
	margin-top: .55rem;
	width: 100%;
	background-color: #f2f2f2;
	overflow: auto;
	.movie-poster{
		width: 50%;
		margin: 0 auto;
		img{
			display: block;
			box-sizing: border-box;
			background: url('data:image/png;base64,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') no-repeat;
			background-position: center;
			background-size: .4rem;
			min-height: 2rem;
			width: 100%;
			margin: 0;
			padding: .1rem;
			border: solid 1px #dadada;
			box-shadow: 0 0 .04rem rgba(0, 0, 0, 0.1);
			background-color: #fff;
		}
	}
	.movie-detail{
		width: 100%;
		.movie-title{
			width: 100%;
			text-align: center;
			font-weight: 700;
			font-size: .16rem;
			line-height: .3rem;
		}
		.movie-star{
			width: 100%;
			text-align: center;
			font-size: .14rem;
			line-height: .26rem;
		}
		.movie-casts{
			width: 100%;
			box-sizing: border-box;
			padding: .1rem .2rem;
			text-align: center;
			font-size: .14rem;
			line-height: .26rem;
			color: #00b600;
		}
		.movie-type{
			width: 100%;
			text-align: center;
			font-size: .14rem;
			line-height: .26rem;
			color: #00b600;
		}
		.movie-summary{
			width: 100%;
			box-sizing: border-box;
			padding: .1rem .2rem;
			font-size: .14rem;
			line-height: .26rem;
		}
	}
}
</style>
