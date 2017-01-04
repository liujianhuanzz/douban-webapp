import Vue from 'vue'
// import Home from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = resolve => {
	require.ensure(['./App.vue'], () => {
		resolve(require('./App.vue'));
	});
};

const Movie = resolve => {
	require.ensure(['./views/movie.vue'], () => {
		resolve(require('./views/movie.vue'));
	});
};

const Music = resolve => {
	require.ensure(['./views/music.vue'], () => {
		resolve(require('./views/music.vue'));
	});
};

const MusicDetail = resolve =>{
    require.ensure(['./views/music-detail.vue'], ()=>{
        resolve(require('./views/music-detail.vue'))
    })
}

const MovieDetail = resolve =>{
	require.ensure(['./views/movie-detail.vue'], ()=>{
		resolve(require('./views/movie-detail.vue'));
	})
}
const routes = [{
	path: '/',
	name: 'home',
	component: Home
}, {
	path: '/movie',
	name: 'movie',
	component: Movie
}, {
	path: '/music',
	name: 'music',
	component: Music
}, {
	path: '/movie/:id',
	name: 'movie-detail',
	component: MovieDetail
},{
    path: '/music/:id',
    name: 'music-detail',
    component: MusicDetail
}, {
	path: '*',
	component: Home
}];

const router = new VueRouter({
   routes
})

module.exports = router
