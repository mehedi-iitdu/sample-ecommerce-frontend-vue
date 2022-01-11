import Vue from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import store from "./stores/store";
import VueRouter from 'vue-router';
import router from './routes/router';

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
