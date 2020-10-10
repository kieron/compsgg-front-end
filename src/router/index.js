import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import VueMeta from 'vue-meta';

Vue.use(VueRouter)
Vue.use(VueMeta)

// Layouts
import DefaultLayout from '../layouts/DefaultLayout.vue'

const _import = name => () => import(`../views/${name}.vue`)

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '',
                name: 'Home',
                component: Home
            },
            {
                path: 'giveaway/:id',
                name: 'Giveaway',
                component: _import('Giveaway'),
            },
            {
                path: 'about',
                name: 'About',
                component: _import('About'),
            },
            {
                path: 'tos',
                name: 'TOS',
                component: _import('Tos'),
            },
            {
                path: 'pp',
                name: 'Privacy Policy',
                component: _import('PrivacyPolicy'),
            },
            {
                path: 'contact',
                name: 'Contact',
                component: _import('Contact'),
            },
            {
                path: 'register',
                name: 'Register',
                component: _import('Register'),
            },
            {
                path: 'login',
                name: 'Login',
                component: _import('Login'),
            }
        ]
    },
    {
        path: '/connect/:provider/callback',
        name: 'LoginRedirect',
        component: _import('LoginRedirect'),
    },
    {
        path: '*',
        name: 'NotFound',
        component: _import('NotFound'),
    },
]

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes,
    scrollBehavior(_, __, savedPosition) {
        return savedPosition || { x: 0, y: 0 }
    }
})

router.beforeEach((to, _, next) => {
    if (to.path === '/login' && store.getters['auth/loggedIn']) {
        return next({ name: 'Home' })
    }
    return next()
})

export default router