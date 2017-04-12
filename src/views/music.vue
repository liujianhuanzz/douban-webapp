<template>
	<div class='image'>
		<page-header :title='title'></page-header>
		<section class='image-container'>
			<search-bar></search-bar>
			<music-list :music_list='music_list'></music-list>
		</section>
		<page-footer :title='title'></page-footer>
		<loader :loader_show='loader_show'></loader>
	</div>
</template>
<script type="text/javascript">
import SearchBar from '../components/search-bar.vue'
import PageHeader from '../components/header.vue'
import PageFooter from '../components/footer.vue'
import Loader from '../components/loading.vue'
import MusicList from '../components/music-list.vue'
import { mapGetters, mapState } from 'vuex'

export default{
	data(){
		return {
			'title': '音乐'
		}
	},
	components:{
		'page-header': PageHeader,
		'page-footer': PageFooter,
		'search-bar': SearchBar,
		'loader': Loader,
		'music-list': MusicList
	},
	methods:{
		search_music(res){
			this.$store.dispatch('setMusicList', res.musics);
		}
	},
	computed:{
		...mapState({
			'loader_show': 'loader_show'
		}),
		...mapGetters({
			'music_list':'getMusicList'
		})
	},
	created(){
		this.$store.dispatch('hideLoading')
	}
}
</script>
<style lang='less' scoped>
.image{
	float: left;
	width: 100%;
	height: 100%;
	.image-container{
		margin-top: .5rem;
		margin-bottom: .5rem;
		width: 100%;
		overflow: auto;
	}
}
</style>
