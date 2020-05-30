<template>
    <div class="car">
        <h2>Your car</h2>
        <p v-show="!products.length"><i>Please add some products to car.</i></p>
        <ul>
            <li
                    v-for="product in products"
                    :key="product.id">
                {{ product.title }} - {{ product.price | currency }} x {{ product.quantity }}
            </li>
        </ul>
        <p>Total: {{ total | currency }}</p>
        <p><button :disabled="!products.length" @click="checkout(products)">Checkout</button></p>
        <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
    </div>
</template>

<script>
    import { mapGetters, mapState } from 'vuex'
    export default {
        computed: {
            ...mapState({
                checkoutStatus: state => state.car.checkoutStatus
            }),
            //mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性
            ...mapGetters('car', {
                products: 'carProducts',
                total: 'carTotalPrice'
            })
        },
        methods: {
            checkout (products) {
                this.$store.dispatch('car/checkout', products)
            }
        }
    }
</script>