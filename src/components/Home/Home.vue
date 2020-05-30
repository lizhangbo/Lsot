<template>
<div id="Home">
    <span>{{message}}</span><br>
    <button v-on:click="goToQuestions">点击去往试题页面</button><br>
    <router-link to="/Home/activityIndex">activityIndex</router-link><br>
    <router-link to="/Home/activityDetail">activityDetail</router-link>
</div>

</template>

<script>
    export default {
        name: "Home",
        data: function () {
            return {
                "message": "这是HOME页面"
            };
        },
        methods:{
            goToQuestions:function () {
                this.$router.push('/ProductList')
            },
            goToActive:function () {
                this.$router.push('/Home/activityIndex')
            }
        }
    }
</script>

<style scoped>

</style>