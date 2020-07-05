<template>
    <div id="viewRelease">
        <span>viewRelease</span><br>
        <article v-html="article.content"></article>
        {{title}}
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "viewRelease",
        data:function(){
            return{
                article:'123'
            };
        },
        methods:{

        },
        created() {
            this.$api.article.getRelease({
                title:this.title
            }).then(res=>{
                console.log(res);
                this.article = res.data;
            })
        },
        computed: mapState({
            ...mapState({
                title: state => state.article.title
            })
        })
    }
</script>

<style scoped>

</style>