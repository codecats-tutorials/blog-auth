import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/auth/Login.vue'
import Logout from './components/auth/Logout.vue'
import App from './components/App.vue'
import router from './route'
import store from './store/index.js'
import { createNamespacedHelpers } from 'vuex'

require('./assets/sass/main.sass');

Vue.use(VueRouter);

Vue.component('app', App);
Vue.component('login', Login);
Vue.component('logout', Logout);

const { mapState, mapActions } = createNamespacedHelpers('user')

new Vue({
    el: '#app',
    //render: h => h(App),
    router,
    store,
    mounted () {
    	this.init();
    },
    methods: {
    	...mapActions(['init'])
    },
    computed: {
    	...mapState(['username', 'token'])
    }
});
