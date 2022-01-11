<template>
    <div class="bg-white">
        <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="flex">
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 mb-4"
                    @click="getProducts"
                >
                    Load More
                </button>
                <p>{{ products.length }} Products found</p>
            </div>

            <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                <div
                    v-for="(product, index) in products"
                    :key="index"
                    class="group"
                >
                    <product :product="product" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Product from './Product.vue'
import axios from 'axios'
export default {
    data: () => ({
        products: []
    }),
    components: { Product },
    methods:{
        async getProducts(){
            return await axios.get('http://127.0.0.1:8000/api/products').then((response) => {
                this.products = [...this.products, ...response.data.data]
            })
        },
        sum(a,b){
            return a+b;
        }
    },
    computed:{
        
    },
    created(){
        this.getProducts()
    }
}
</script>

<style>

</style>