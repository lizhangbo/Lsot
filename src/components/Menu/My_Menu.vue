<template>
    <div id="My_Menu">
        <at-menu mode="horizontal" active-name="1">
            <at-menu-item name="1"><i class="icon icon-home"></i>导航菜单一</at-menu-item>
            <at-menu-item name="2"><i class="icon icon-layers"></i>导航菜单二</at-menu-item>
            <at-submenu>
                <template slot="title"><i class="icon icon-life-buoy"></i>导航菜单三</template>
                <at-menu-item name="3-1"><i class="icon icon-settings"></i>导航菜单四</at-menu-item>
                <at-menu-item name="3-2"><i class="icon icon-settings"></i>导航菜单五</at-menu-item>
                <at-submenu>
                    <template slot="title"><i class="icon icon-life-buoy"></i>导航菜单六</template>
                    <at-menu-item name="3-3-1"><i class="icon icon-settings"></i>导航菜单七</at-menu-item>
                    <at-menu-item name="3-3-2"><i class="icon icon-settings"></i>导航菜单八</at-menu-item>
                </at-submenu>
            </at-submenu>
            <at-menu-item name="4"><i class="icon icon-settings"></i>导航菜单四</at-menu-item>
        </at-menu>
    </div>
</template>

<script>
    export default {
        name: "My_Menu",
        data: function () {
            return {

            };
        }
    }
</script>

<style scoped>

</style>