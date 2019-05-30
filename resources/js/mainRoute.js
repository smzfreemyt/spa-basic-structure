import Vue from 'vue';
import Router from 'vue-router';
import Error404 from './components/Error404';
import People from './components/people';
import Home from './components/Home';

Vue.use(Router);

const baseRoutes = [
	{
		path: '/home',
		alias: '/',
		name: 'home',
		component: Home,	
		meta: {
	      title: 'Welcome Home', 
	    }
	},
	{
		path: '*',
		component: Error404,
		meta:{
			title: 'Page Error'
		}
	}
];

const routes = baseRoutes.concat(People);

let router = new Router({
	routes,
	mode: 'history',
	base: '/',
	fallback: true
});

router.mode = 'html5';

export default router;