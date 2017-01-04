import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const userStore = new Vuex.Store({
    state: {
        userInfo: {
            name:'test'
        },
        musicList:[],
        movieList: []
    },
    getters: {
        getUserInfo(state) {
            return state.userInfo;
        },
        getMusicList(state) {
            return state.musicList;
        },
        getMovieList(state) {
            return state.movieList;
        }
    },
    mutations: {
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        },
        setMusicList(state, musicList) {
            state.musicList = musicList;
        },
        setMovieList(state, movieList) {
            state.movieList = movieList;
        }
    },
    actions: {
        setUserInfo({ commit }, user) {
            commit('setUserInfo', user);
        },
        setMusicList({ commit }, musicList) {
            commit('setMusicList', musicList);
        },
        setMovieList({ commit }, movieList) {
            commit('setMovieList', movieList);
        }
    }
});

export default userStore;
