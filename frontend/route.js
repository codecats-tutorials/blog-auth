import VueRouter from 'vue-router';

let router = new VueRouter({
	routes: [{
			path: '/',
			component: require('./components/App.vue')
		}, {
			path: '/about',
			component: require('./components/App2.vue')
	}],

	linkActiveClass: 'is-active'

});

router.beforeEach((to, from, next) => {
  document.title = 'Vue ' + to.path.replace('-', ' ').split('/').join('')
  next()
})

export default router;
