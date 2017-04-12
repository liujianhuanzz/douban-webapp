import * as types from './mutations-type'

export const setMovieInfo = async ({commit}, {id, context}) => {
  let res = await context.$http.jsonp('http://api.douban.com/v2/movie/subject/'+ id);
  if(res.ok){
    commit(types.SET_MOVIE_INFO, {movieInfo: res.data})
    commit(types.HIDE_LOADING);
  }
}

export const setMovieList = async ({commit}, {context}) => {
  let resArr = await window.localStorage.getItem('movieList').split('??');
  let res;
  if(!resArr[1] || (resArr[1] && Date.now() - parseInt(resArr[1]) > 30* 60 * 1000)){
    res = await context.$http.jsonp('http://api.douban.com/v2/movie/in_theaters');
    if(res.ok){
      commit(types.SET_MOVIE_LIST, {movieList: res.body})
      commit(types.HIDE_LOADING);
      window.localStorage.setItem('movieList',JSON.stringify(res) + '??' + Date.now())
    }
  }else{
    res = JSON.parse(resArr[0]);
    commit(types.SET_MOVIE_LIST, {movieList: res.body})
    commit(types.HIDE_LOADING);
  }
}

export const setMusicList = async ({commit}, {msg, context}) => {
  let res = await context.$http.jsonp('https://api.douban.com/v2/music/search?q=' + msg);
  if(res.ok){
    commit(types.SET_MUSIC_LIST, {musicList: res.data})
    commit(types.HIDE_LOADING);
  }
}

export const setMusicInfo = async ({commit}, {id, context}) => {
  let res = await context.$http.jsonp('https://api.douban.com/v2/music/' + id);
  if(res.ok){
    commit(types.SET_MUSIC_INFO, {musicInfo: res.data})
    commit(types.HIDE_LOADING);
  }
}

export const showLoading = ({commit}) => {
  commit(types.SHOW_LOADING);
}

export const hideLoading = ({commit}) => {
  commit(types.HIDE_LOADING);
}
