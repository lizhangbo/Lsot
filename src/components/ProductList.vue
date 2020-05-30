<template>
    <ul>
        <li
                v-for="product in products"
                :key="product.id">
            {{ product.title }} - {{ product.price | currency }}
            <br>
            <button
                    :disabled="!product.inventory"
                    @click="addProductToCart(product)">
                Add to car
            </button>
        </li>
    </ul>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        computed: mapState({
            products: state => state.product.all
        }),
        methods: mapActions('car', [
            'addProductToCart'
        ]),
        created () {
            this.$store.dispatch('product/getAllProducts')
        }
    }
</script>