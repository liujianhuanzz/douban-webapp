import Vue from 'vue';
import Vuex from 'vuex';
import state from './state'
import * as actions from './action'
import mutations from './mutations'
console.log(state)
Vue.use(Vuex);

const userStore = new Vuex.Store({
    state,
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
    mutations,
    actions
});

export default userStore;
