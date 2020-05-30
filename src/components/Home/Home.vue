<template>
<div id="Home">
    <div id="base">
        <span>{{message}}</span><br>
        <at-input id="input_ser" v-model="inputValue" placeholder="输入提示"></at-input>
        <at-table :columns="columns2" :data="data3" pagination></at-table>

        <button v-on:click="goToQuestions">点击去往试题页面</button><br>
        <router-link to="/Home/activityIndex">activityIndex</router-link><br>
        <router-link to="/Home/activityDetail">activityDetail</router-link>
    </div>
</div>

</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "Home",
        data: function () {
            return {
                "message": "这是HOME页面",
                "inputValue":'请输入搜索内容'
            };
        },
        computed: mapState({
            data3: state => state.table.table_data,
            columns2: state => state.table.table_title
        }),
        methods:{
            goToQuestions:function () {
                this.$router.push('/ProductList')
            },
            goToActive:function () {
                this.$router.push('/Home/activityIndex')
            }
        },
        created () {
            this.$store.dispatch('table/getTableTitle')
            this.$store.dispatch('table/getTables')
        }
    }
</script>

<style scoped>
    #input_ser{
        width: 50%;
        margin: 0 auto;
        display: block;
    }
    #base{
        width: 75%;
        margin: 0 auto;
    }
</style>