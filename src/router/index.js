import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VueMeta from 'vue-meta';

Vue.use(VueRouter)
Vue.use(VueMeta)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/giveaway/:id',
    name: 'Giveaway',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Giveaway.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
  
})

export default router
