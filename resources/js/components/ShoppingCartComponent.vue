<template>
    <div class="ShoppingCart">
        <div class="flex shadow-md">
            <div class="w-3/4 bg-white px-10 py-10">
                <div class="flex justify-between border-b pb-8">
                    <h1 class="font-semibold text-2xl">Shopping Cart</h1>
                    <h2 class="font-semibold text-2xl">{{ totalProduct }} produits dans votre panier</h2>
                </div>
                <div class="flex mt-10 mb-5">
                    <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Nom du produit</h3>
                    <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantité</h3>
                    <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Prix</h3>
                    <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                </div>

                <div v-for="(product, index) in getCart" :key="index" class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                    <div class="flex w-2/5">
                        <div class="flex flex-col justify-between ml-4 flex-grow">
                        <span class="font-bold text-sm">{{ product.title }}</span>
                        <a href="#" @click="$store.commit('removeProductToCart', index)" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Supprimer du panier</a>
                        </div>
                    </div>

                    <div class="flex justify-center w-1/5">
                        <span class="mx-2 border text-center w-8" v-text="product.qty"></span>
                    </div>
                    <span class="text-center w-1/5 font-semibold text-sm">{{ product.price}}</span>
                    <span class="text-center w-1/5 font-semibold text-sm">{{ (product.price * product.qty)}}</span>
                </div>
            </div>

            <div id="summary" class="w-1/4 px-8 py-10">
                <h1 class="font-semibold text-2xl border-b pb-8">Informations</h1>
                <div class="border-t mt-8">
                <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                    <span>Prix total</span>
                    <span>{{ totalPrice }} €</span>
                </div>
                <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Payer</button>
                </div>
            </div>

        </div>
  </div>
</template>

<script>
export default {
    computed: {
        getCart() {
            return this.$store.state.cart;
        },
        totalProduct() {
            return this.$store.state.cart.reduce((acc, current) => acc + current.qty, 0);
        },
        totalPrice() {
            return this.$store.state.cart.reduce((acc, current) => acc + current.price * current.qty, 0);
        }
    }
}
</script>

<style>
.ShoppingCart{
    width: 100vw;
}
</style>