<template>
    <div id="My_Menu">
        <Menu mode="horizontal" :theme="theme1" active-key="3">
            <Menu-item :name="k.value" v-for="k in keys" :key="k.key">
                <Icon :type="k.type"></Icon>
                <span>{{k.value}}</span>
            </Menu-item>
            <Submenu key="4" name="父菜单">
                <template slot="title">
                    <Icon type="stats-bars"></Icon>
                    统计分析
                </template>
                <Menu-group title="使用">
                    <Menu-item name="新增和启动" key="3-1">新增和启动</Menu-item>
                    <Menu-item name="活跃分析" key="3-2">活跃分析</Menu-item>
                    <Menu-item name="时段分析" key="3-3">时段分析</Menu-item>
                </Menu-group>
                <Menu-group title="留存">
                    <Menu-item name="用户留存" key="3-4">用户留存</Menu-item>
                    <Menu-item name="流失用户" key="3-5">流失用户</Menu-item>
                </Menu-group>
            </Submenu>
        </Menu>
        <br>
        <p>切换主题</p>
        <Radio-group :model.sync="theme1">
            <Radio value="light"></Radio>
            <Radio value="dark"></Radio>
            <Radio value="primary"></Radio>
        </Radio-group>
    </div>
</template>

<script>
    export default {
        name: "My_Menu",
        data: function () {
            return {
                theme1: 'light',
                keys: [
                    {key: '1', value: '内容管理', type: 'ios-paper'},
                    {key: '2', value: '用户管理', type: 'ios-people'},
                    {key: '3', value: '综合设置', type: 'settings'},
                ]
            };
        }
    }
</script>

<style scoped>

</style>