import axios from 'axios'
export default {
 namespaced: true,
 state:{
  products:[]
 },
 getters:{
  getProducts(state){
   return state.products;
  }
 },
 mutations: {
  setProducts(state, products){
    state.products = [...state.products, ...products]
  }
 },
 actions: {
  async getProductsFromApi({commit}){
    const res = await axios.get('http://127.0.0.1:8000/api/products');
    commit("setProducts", res.data.data);
   }
 }
}