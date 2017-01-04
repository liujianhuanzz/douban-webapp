<template>
	<div class="detail">
		<page-header :title='title' :isShow='back_show'></page-header>
		<article class="movie-info">
			<div class='movie-poster'>
				<img :src='movie_poster' alt>
			</div>
			<section class='movie-detail'>
				<div class='movie-title'>{{title}}</div>
				<div class='movie-star'>
					<span style='color: orange'>{{"★★★★★☆☆☆☆☆".slice(5 - parseInt(movie_star/2), 10 - parseInt(movie_star/2))}} {{movie_star}}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style='color: orange'>{{movie_count}}</span>人已评价
				</div>
				<div class='movie-casts'>
					<template v-for='item in movie_directors'>
						<span>{{item.name}}/</span>
					</template>
					<template v-for='(list, index) in movie_casts'>
						<span v-if='index < (movie_casts.length - 1)'>{{list.name}}/</span>
						<span v-else>{{list.name}}</span>
					</template>
				</div>
				<div class='movie-type'>
					<template v-for='(item, index) in movie_type'>
						<span v-if='index < (movie_type.length - 1)'>{{movie_type[index]}}/</span>
						<span v-else>{{movie_type[index]}}</span>
					</template>

				</div>
				<div class='movie-summary'>
					<p style='color: #00b600;'>故事简介：</p>{{movie_summary}}
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
export default{
	data(){
		return {
			title: '努力加载中',
			movie_id: '',
			movie_poster: '',
			movie_star: '',
			movie_count: '',
			movie_directors:[],
			movie_casts: [],
			movie_type: [],
			movie_summary: '',
			back_show: true,
			loader_show: true
		}
	},
	components:{
		'page-header': PageHeader,
		'page-footer': PageFooter,
		'loader': Loader
	},
	created(){
		let self = this;
		self.getMovieId();
		self.$http.jsonp('http://api.douban.com/v2/movie/subject/'+ self.movie_id).then((response) => {
        	// console.log(response);
        	if(response.ok){
				let res = response.data;
				self.title = res.title;
				self.movie_poster = res.images.large;
				self.movie_star = res.rating.average;
				self.movie_count = res.ratings_count;
				self.movie_directors = res.directors;
				self.movie_casts = res.casts;
				self.movie_type = res.genres;
				self.movie_summary = res.summary;
				self.loader_show = false;
        	}
       	})
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
