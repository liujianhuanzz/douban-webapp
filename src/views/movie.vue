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
import { mapGetters, mapState } from 'vuex'
export default{
	data(){
		return {
			'title': '电影',
			'in_theaters':[],
			'total': 0
		}
	},
	components:{
		'page-header': PageHeader,
		'page-footer': PageFooter,
		'movie-list': MovieList,
		'loader': Loader
	},
	computed:{
		...mapState({
			'loader_show': 'loader_show'
		}),
		...mapGetters({
			'userInfo':'getUserInfo',
			'movie_list':'getMovieList'
		})
	},
	created(){
		this.$store.dispatch("showLoading");
		this.$store.dispatch("setMovieList", {context: this});
	}
}
</script>
<style lang='less'>
.film{
	width: 100%;
	height: auto;
}
</style>
