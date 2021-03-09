require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
Vue.use(VueRouter);


import Home from './components/Homecomponent.vue';
import Product from './components/Productcomponent.vue';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/produit',
        component: Product,
    }
];

const router = new VueRouter({routes});


const app = new Vue({
    el: '#app',
    router: router
});
