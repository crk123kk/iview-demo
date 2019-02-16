<template>
    <div>
    <Menu mode="horizontal" :theme="theme1" active-name="1" class="navigation-bar">
        <MenuItem v-for="(menu, index) in menuList" :key="index" :name="index" :style="{width: (100/menuList.length) +'%'}" :title="menu.name">
            <Icon type="ios-paper" />
            {{menu.name}}
        </MenuItem>
    </Menu>

    </div>
</template>

<script>
    export default {
        name: 'PageNavMenu',
        data () {
            return {
                theme1: 'light',
                menuList: [
                    {name: '首页', url: 'index'},
                    {name: '登录', url: 'index'},
                    {name: '用户', url: 'index'},
                    {name: '内容管理', url: 'index'},
                    {name: '综合设置', url: 'index'},
                    {name: '统计分析', url: 'index'},
                    {name: '首页', url: 'index'},
                    {name: '登录', url: 'index'},
                    {name: '用户', url: 'index'},
                    {name: '内容管理', url: 'index'},
                    {name: '综合设置', url: 'index'},
                    {name: '统计分析', url: 'index'},
                    {name: '统计分析', url: 'index'},
                    {name: '统计分析', url: 'index'},
                    {name: '统计分析', url: 'index'}
                ]
            }
        }
    }
</script>

<style scoped>
    .navigation-bar {
        width: 100%;
        overflow: hidden;
    }

    .navigation-bar > li{
        padding: 0 12px;
        white-space:nowrap;
        overflow:hidden;
        text-overflow: ellipsis;
    }
</style>

