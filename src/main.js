import Vue from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import store from "./stores/store";
import router from './routes/router';

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
