import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/tailwind.css'
import VueGtag from "vue-gtag";

if (process.env.NODE_ENV === 'production') {
  Vue.use(VueGtag, {
    config: { id: "UA-84362939-10" }
  });
}

Vue.config.productionTip = true

new Vue({
  router,
  render: h => h(App),
  
}).$mount('#app')

