import Vue from 'vue'
import App from './App'
import { store } from './store/store';
import axios from 'axios';

Vue.prototype.$axios = axios;

new Vue({
	el: '#app',
	store,
	components: {
		App
	},
	template: '<App/>'
})