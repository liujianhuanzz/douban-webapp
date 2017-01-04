<template>
	<div class="detail">
		<page-header :title='title' :isShow='back_show'></page-header>
		<article class="music-info">
			<div class='music-poster'>
				<img :src='music_poster' alt>
			</div>
			<section class='music-detail'>
				<div class='music-title'>{{title}}</div>
				<div class='music-star'>
					<span style='color: orange'>{{"★★★★★☆☆☆☆☆".slice(5 - parseInt(music_star/2), 10 - parseInt(music_star/2))}} {{music_star}}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style='color: orange'>{{music_count}}</span>人已评价
				</div>
				<div class='music-singer'>
					<template v-for='(list, index) in music_singer'>
						<span v-if='index < (music_singer.length - 1)'>{{music_singer[index]}}/</span>
						<span v-else>{{music_singer[index]}}</span>
					</template>
				</div>
                <div class='music-pubdate'>
                    发行日期：{{music_pubdate}}
				</div>
				<div class='music-type'>
					<template v-for='(item, index) in music_type'>
                        <span v-if='index < (music_type.length - 1)'>
                            {{item.name}}/
                        </span>
                        <span v-else>{{item.name}}</span>
                    </template>
				</div>
				<div class='music-list'>
					<p style='color: #00b600;'>曲目列表：</p>
                    <ul>
                        <li v-for='(item,index) in music_list'>{{(index + 1)}}.{{item.substr(1)}}</li>
                    </ul>
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
			music_id: '',
			music_poster: '',
			music_star: '',
			music_count: '',
            music_pubdate: '',
			music_singer:[],
			music_casts: [],
			music_type: [],
			music_list: '',
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
		self.getmusicId();
		self.$http.jsonp('https://api.douban.com/v2/music/'+ self.music_id).then((response) => {
        	console.log(response);
        	if(response.ok){
				let res = response.data;
				self.title = res.title;
				self.music_poster = res.image;
				self.music_star = res.rating.average;
				self.music_count = res.rating.numRaters;
				self.music_singer = res.attrs.singer;
                self.music_pubdate = res.attrs.pubdate[0];
				self.music_type = res.tags;
				self.music_list = res.attrs.tracks[0].split('\n');
				self.loader_show = false;
        	}
       	})
	},
	methods:{
		getmusicId(){
			let url = window.location.href;
			this.music_id = url.split('music/')[1];
		}
	}

}
</script>
<style lang='less' scoped>
.music-info{
	position: relative;
	float: left;
	margin-top: .55rem;
	width: 100%;
	background-color: #f2f2f2;
	overflow: auto;
	.music-poster{
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
	.music-detail{
		width: 100%;
		.music-title{
			width: 100%;
			text-align: center;
			font-weight: 700;
			font-size: .16rem;
			line-height: .3rem;
		}
		.music-star{
			width: 100%;
			text-align: center;
			font-size: .14rem;
			line-height: .26rem;
		}
        .music-pubdate,
		.music-singer,
        .music-type{
			width: 100%;
			box-sizing: border-box;
			padding: .05rem .2rem;
			text-align: center;
			font-size: .14rem;
			line-height: .26rem;
			color: #666;
		}
		.music-list{
			width: 100%;
			box-sizing: border-box;
			padding: .1rem .2rem;
			font-size: .14rem;
			line-height: .26rem;
            ul{
                li{
                    width: 100%;
                    color: #666;
                    font-size: .12rem;
                    line-height: .2rem;
                }
            }
		}
	}
}
</style>
