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
    qtyInCart: (state) => (product) => {
      const cartItem = state.cartProducts.find((item)=>{
        return item.productId === product.id
      });
      if(cartItem!== undefined) {
        return cartItem.quantity
      }
      return 0;
    }
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
    manageQuantity(state, product, action) {
      const cartItem = state.cartProducts.find((item)=>{
        return item.productId === product.id
      });

      if(cartItem!== undefined) {
        switch (action) {
          case 'increase':
              
            break;
          default:
            break;
        }
      } // else alert error
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
    manageQuantity({commit}, product, action) {
      commit("manageQuantity", product, action);
    },
    removeFromCart({ commit }, product) {
      commit("removeFromCart", product);
    },
  },
};
