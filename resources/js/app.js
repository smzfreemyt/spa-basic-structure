/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');


const Resource = require('vue-resource');
Vue.use(Resource);

import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

import router from './mainRoute.js';


/**  Begin - for NProgress loader
 */ 
import NProgress from 'nprogress'; 
import '../../node_modules/nprogress/nprogress.css';  
router.beforeEach((to, from, next) => { 
	const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);  
  	if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

	if (to.name) {
	    NProgress.start()
	}
	next()
});

router.afterEach((to, from) => {
  NProgress.done()
}); 

/* End of NProgress
*/


import App from './components/MainApp.vue';

const app = new Vue({
	el: '#app',
	render: h => h(App),
	router,
});