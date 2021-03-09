require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
import VueX from 'vuex';

Vue.use(VueRouter);
Vue.use(VueX);


import Home from './components/HomeComponent.vue';
import Product from './components/Productcomponent.vue';
import ShoppingCart from './components/ShoppingCartComponent.vue';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/product/:id',
            name: 'products.show',
            component: Product,
            props: true,
        },
        {
            path: '/ShoppingCart',
            name: 'ShoppingCart',
            component: ShoppingCart,

        }
    ]
});

const store = new VueX.Store({
    state: {
        cart:[],
        products: [],
    },

    mutations: {
        setProducts(state, products) {
            state.products = products;
        },

        addProductToCart(state, product) {

            const duplicatedProductIndex = state.cart.findIndex(item => item.id === product.id);

            if (duplicatedProductIndex !== -1) {
                state.cart[duplicatedProductIndex].qty++;
                return;
            }

            product.qty = 1;
            state.cart.push(product);
        },

        removeProductToCart(state, index) {
            state.cart.splice(index, 1);
        },
    },

    actions: {
        getProducts({ commit }) {
            axios.get('/api/products')
                .then((response) => {
                    commit('setProducts', response.data)
                })
                .catch((error) => console.error(error))
        },
    },
})

const app = new Vue({
    router,
    store,
    el: '#app',
});
