export default {
  namespaced: true,
  state: {
    cartProducts: [],
  },
  getters: {
    getCartProducts: (state) => {
      return state.cartProducts;
    },
    hasInCart: (state) => (product) => {
      return state.cartProducts.some((item) => item.productId === product.id);
    },
  },
  mutations: {
    addToCart(state, product) {
      if (state.cartProducts.find((item) => item.productId === product.id)) {
        state.cartProducts.map((item) =>
          item.productId === product.id ? item.quantity++ : item
        );
      } else {
        state.cartProducts.push({
          productId: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        });
      }
    },
    removeFromCart(state, product) {
      state.cartProducts = state.cartProducts.filter(
        (item) => item.productId !== product.id
      );
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit("addToCart", product);
    },
    removeFromCart({ commit }, product) {
      commit("removeFromCart", product);
    },
  },
};
