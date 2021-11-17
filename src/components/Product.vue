<template>
    <div>
        <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-full object-center object-cover group-hover:opacity-75"
            >
        </div>
        <h3 class="mt-4 text-sm text-gray-700">
            {{ product.name }}
        </h3>
        <p class="mt-1 text-lg font-medium text-gray-900">
            ${{ product.price }}
        </p>
        <button
            class="mt-4 w-full px-6 py-2 transition ease-in duration-200 uppercase rounded-full bg-gray-800 text-white border-2 border-gray-900 focus:outline-none"
        >
            Add to Cart
        </button>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            default: () => ({
                id: null,
                name: null, 
                image: null,
                price: null
            })
        }
    }
}
</script>

<style>

</style>