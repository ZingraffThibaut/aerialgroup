<template>
    <div class="m-full h-full mt-10">
        <div class="flex ">
            <div class="w-1/3"> 
                <div class="grid justify-items-center">
                    <img class="mb-10" :src="products[productId].image1" alt="">
                    <img class="mb-10" :src="products[productId].image2" alt="">
                    <img class="" :src="products[productId].image3" alt="">
                </div>
               
            </div>
            <div class="w-2/3 p-4">
                <h1 class="text-gray-900 font-bold text-2xl mb-10">{{ products[productId].title }}</h1>
                <p class="mt-2 text-gray-600 text-sm mb-10">{{ products[productId].long_description }}</p>
                <div class="flex item-center justify-between mt-3">
                    <h1 class="text-gray-700 font-bold text-2xl mb-10">{{ products[productId].price }} €</h1>  
                    <button 
                        @click="$store.commit('addProductToCart', products[productId] )" 
                        class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                    >
                        Ajouter au panier
                    </button>
                </div>
                
              
            </div>
        </div>
    </div>
</template>

<script>
import productsData from "./MOCK_DATA.json";

export default {
    props: ['id'],
    data(){
        return {
            products: productsData,
            productId:  null ,
        }
    },
    created() {
        if(this.id){
            this.productId = this.id - 1 ;
        }
    },

}
</script>