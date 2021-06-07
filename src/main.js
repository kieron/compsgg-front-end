import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//import VueGtag from "vue-gtag";
import SvgIcon from "./util/SvgIcon.vue";

import "@/assets/css/tailwind.css";

// if (process.env.NODE_ENV === 'production') {
//     Vue.use(VueGtag, {
//         config: { id: "UA-84362939-10" }
//     });
// }

Vue.config.productionTip = false;

Vue.component("SvgIcon", SvgIcon);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
