import * as types from './mutations-type'

export default {
  [types.SET_MOVIE_LIST] (state, {movieList}){
    state.movieList = movieList.subjects;
  },

  [types.SET_MUSIC_LIST] (state, {musicList}){
    state.musicList = musicList.musics;
  },

  [types.SET_MOVIE_INFO] (state, {movieInfo}){
    state.movieInfo.title = movieInfo.title;
    state.movieInfo.movie_poster = movieInfo.images.large;
    state.movieInfo.movie_star = movieInfo.rating.average;
    state.movieInfo.movie_count = movieInfo.ratings_count;
    state.movieInfo.movie_directors = movieInfo.directors;
    state.movieInfo.movie_casts = movieInfo.casts;
    state.movieInfo.movie_type = movieInfo.genres;
    state.movieInfo.movie_summary = movieInfo.summary;
  },

  [types.SET_MUSIC_INFO] (state, {musicInfo}){
    state.musicInfo.title = musicInfo.title;
    state.musicInfo.music_poster = musicInfo.image;
    state.musicInfo.music_star = musicInfo.rating.average;
    state.musicInfo.music_count = musicInfo.rating.numRaters;
    state.musicInfo.music_singer = musicInfo.attrs.singer;
    state.musicInfo.music_pubdate = musicInfo.attrs.pubdate?musicInfo.attrs.pubdate[0]:'未知';
    state.musicInfo.music_type = musicInfo.tags;
    state.musicInfo.music_list = musicInfo.attrs.tracks ?musicInfo.attrs.tracks[0].split('\n'):[];
  },

  [types.SHOW_LOADING] (state){
    state.loader_show = true;
    state.movieInfo.title = "努力加载中";
  },

  [types.HIDE_LOADING] (state){
    state.loader_show = false;
  }
}
