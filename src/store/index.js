import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// Using vuex
Vue.use(Vuex)

// Modules
import auth from './modules/auth.store'

export default new Vuex.Store({
    modules: { auth },
    plugins: [
        createPersistedState({
            key: 'compsgg',
            paths: ['auth']
        })
    ]
})