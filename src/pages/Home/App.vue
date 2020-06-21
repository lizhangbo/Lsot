<template>
    <div id="app">
        <!--    <img alt="Vue logo" src="./assets/images/timg.png">
            <HelloWorld msg="Welcome to Your Vue.js App"/>
            <span>{{msg}}</span><br>
            <a v-on:click="onLoad('hai')">点击</a><br>
            <a v-on:click="exam('hello')">测试</a><br>
            <a v-on:click="goBack">回退</a><br>
            <p>
              &lt;!&ndash; 使用 router-link 组件来导航. &ndash;&gt;
              &lt;!&ndash; 通过传入 `to` 属性指定链接. &ndash;&gt;
              &lt;!&ndash; <router-link> 默认会被渲染成一个 `<a>` 标签 &ndash;&gt;
              <router-link to="/foo">Go to Foo</router-link>
              <router-link to="/bar">Go to Bar</router-link>
            </p>-->
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <Menu></Menu>
        <router-view></router-view>

        <!--    <br>
            <h2>Products</h2>
            <ProductList/>
            <hr>
            <ShoppingCart/>-->
    </div>

</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue';
    // import ProductList from './components/ProductList.vue'
    // import ShoppingCart from './components/ShoppingCart.vue'
    import Menu from '../../components/Menu/My_Menu'

    export default {
        name: 'App',
        components: {
            // HelloWorld,
            // ProductList,
            // ShoppingCart
            Menu
        },
        data: function () {
            return {
                msg: '你好'
            };
        },
        computed: {
            username() {
                // 我们很快就会看到 `params` 是什么
                return this.$route.params.username
            }
        },
        methods: {
            onLoad(id) {
                console.log(11111 + id);
                this.$api.article.articleDetail(id, {
                    api: '123'
                }).then(res => {
                    // 执行某些操作
                    console.log(res);
                })
            },
            exam: function () {
                let paramObj = {
                    uid: '123456'
                }
                this.$server.exam(paramObj).then(data => {
                    console.log(data)
                })
            },
            goBack() {
                window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 0px;
    }
</style>
