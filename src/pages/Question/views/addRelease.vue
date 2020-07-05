<template>
    <div id="addRelease">
        <router-link to="/viewRelease">查看文章</router-link><br>
        <form ref="formData" :model="formData">
            <div style="margin-top: 10px;">
                <mavon-editor v-model="formData.content" @change="handle" style="width: 80%;margin: auto"></mavon-editor>
            </div>
            <div style="margin-top: 10px;">
                <label>发布对象:</label>
                <at-select v-model="formData.people" clearable size="large" style="width: 30%">
                    <at-option v-for="item in options" :key="item" :label="item.label" :value="item.value"></at-option>
                </at-select>
            </div>
            <div style="margin-top: 10px;">
                <label>发布标题:</label>
                <at-input style="width: 30%;margin:auto;display: inline-block" v-model="formData.title"
                          placeholder="输入发布标题"></at-input>
            </div>
            <div style="margin-top: 10px;">
                <at-button type="primary" @click="submit">发布</at-button>
            </div>
        </form>
        <article v-html="myhtml"></article>
        <span v-html="formData"></span>
    </div>
</template>

<script>
    export default {
        name: "addRelease",
        data: function () {
            return {
                formData: {
                    title: "",
                    people: "",
                    content: ""
                },
                options: [
                    {
                        value: "0",
                        label: "全部"
                    },
                    {
                        value: "1",
                        label: "教练"
                    },
                    {
                        value: "2",
                        label: "学员"
                    }]
            }
        },
        methods:{
            handle(value, render) {
                this.myhtml = render;
                console.log(value, render);
            },
            submit(){
                this.$api.article.getAddRelease({
                    title: this.formData.title,
                    content: this.myhtml,
                    people: this.formData.people
                }).then(res=>{
                    console.log(res);
                    alert(res.data.result)
                });
                this.$store.dispatch('article/setArticle', this.formData.title);
                this.formData = {
                    title: "",
                    people: "",
                    content: ""
                };
            }
        }
    }
</script>

<style scoped>

</style>