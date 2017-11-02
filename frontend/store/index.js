import Vue from 'vue'
import Vuex from 'vuex'
import counter from './counter.js'
import user from './user.js'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        counter: {namespaced: true, ...counter},
        user: {namespaced: true, ...user}
    }
});
