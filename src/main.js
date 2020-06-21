import Vue from 'vue'
import App from './App.vue'
//import './registerServiceWorker'
import router from './router'
import axios from "axios";
import '@/assets/css/tailwind.css'
import '@/assets/js/app.js'
import VueGtag from "vue-gtag";



if (process.env.NODE_ENV === 'production') {
  Vue.use(VueGtag, {
    config: { id: "UA-84362939-10" }
  });
}

const http = axios.create({
  baseURL: 'https://api.seekly.io/'
});

Vue.prototype.$http = http;
Vue.config.productionTip = true

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
