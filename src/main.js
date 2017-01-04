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

new Vue({
	router,
	store
}).$mount('#app');
