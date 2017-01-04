<template>
	<div class='film'>
		<page-header :title='title'></page-header>
		<movie-list :total='total' :list='movie_list'></movie-list>
		<loader :loader_show='loader_show'></loader>
		<page-footer :title='title'></page-footer>
	</div>
</template>
<script type="text/javascript">
import Loader from '../components/loading.vue'
import PageHeader from '../components/header.vue'
import PageFooter from '../components/footer.vue'
import MovieList from '../components/movie-list.vue'
import { mapGetters } from 'vuex'
export default{
	data(){
		return {
			'title': '电影',
			'in_theaters':[],
			'total': 0,
			'loader_show': true
		}
	},
	components:{
		'page-header': PageHeader,
		'page-footer': PageFooter,
		'movie-list': MovieList,
		'loader': Loader
	},
	computed:{
		...mapGetters({
			'userInfo':'getUserInfo',
			'movie_list':'getMovieList'

		})
	},
	created(){
		let self = this;
        if(!self.movie_list.length){
			self.$http.jsonp('http://api.douban.com/v2/movie/in_theaters').then((response) => {
				console.log(response);
	        	if(response.ok){
	        		self.total = response.data.total;
					self.$store.dispatch('setMovieList', response.data.subjects);
					self.loader_show = false;
	        	}
	       	})
		}else{
			self.loader_show = false;
		}
	}
}
</script>
<style lang='less'>
.film{
	width: 100%;
	height: auto;
}
</style>
