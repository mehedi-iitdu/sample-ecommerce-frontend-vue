import Vue from "vue";
import Vuex from "vuex";
import cart from "./modules/cart";
import wishlist from "./modules/wishlist";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    cart: cart,
    wishlist: wishlist,
  },
});

export default store;
