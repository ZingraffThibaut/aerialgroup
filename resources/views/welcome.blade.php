<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <title>Aerial Group</title>

    </head>
    
    <body>

        <div id="app">
            <nav class="py-8 px-20 bg-gray-100">
                <ul class="flex justify-between">
                    <li class="mr-5 font-semibold"><router-link :to="{name : 'home'}">Accueil</router-link></li>
                    <li class="font-semibold"><router-link :to="{name: 'ShoppingCart'}">Mon Panier <span v-text="this.$store.state.cart.length"></span></router-link></li>
                </ul>
            </nav>

            <div class="container max-w-full">
                <router-view></router-view>
            </div>
        </div>
    
    <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
