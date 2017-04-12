// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
require('./assets/css/normalize.css')
require('./assets/css/response.css')
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './vuex/index'
import router from './router'

Vue.use(VueResource)

router.beforeEach((to, from, next)=>{
	document.body.scrollTop = 0;
	console.log(to);
	if(to.name == 'movie') document.title = '豆瓣电影';
	if(to.name == 'music') document.title = '豆瓣音乐';
	if(to.name == 'movie-detail') document.title = '电影详情';
	if(to.name == 'music-detail') document.title = '音乐详情'
	next();
})

new Vue({
	router,
	store
}).$mount('#app');
