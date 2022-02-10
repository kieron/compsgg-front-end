import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import SvgIcon from "./util/SvgIcon.vue";
import Ads from "vue-google-adsense";
import "@/assets/css/tailwind.css";

if (process.env.NODE_ENV === "production") {
  Vue.use(Ads.AutoAdsense, {
    adClient: "pub-7677794196959549",
    isNewAdsCode: false,
  });
}
Vue.config.productionTip = false;

Vue.component("SvgIcon", SvgIcon);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
