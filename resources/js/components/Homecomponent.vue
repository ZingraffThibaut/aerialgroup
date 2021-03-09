<template>
    <div class="flex flex-wrap justify-center">

        <div class="flex flex-col justify-between lg:w-1/5 md:w-1/3 sm:1/2 m-10 bg-gray-100 rounded-md " v-for="product of products" :key="product.id">
            <img class="w-full h-48 rounded-tl-md rounded-tr-md" :src="product.image1" alt="">
            
            <div class="flex flex-col justify-between h-full m-3">
                <div class="font-bold">
                    {{ product.title }}
                </div>

                <div class="flex-grow justify-self-stretch text-sm mt-2 text-justify">
                    {{ product.description }}
                </div>

                <div class="flex justify-between mt-3">
                    <div class="text-xl font-bold">{{ product.price}} €</div>
                    <router-link :to="{name: 'products.show', params: {id: product.id}}">En savoir plus</router-link>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import productsData from "./MOCK_DATA.json";

export default {
    data(){
        return {
            products: productsData,
        }
    },
}
</script>

<style>

</style>