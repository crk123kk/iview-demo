<template>
    <div>
    <Menu mode="horizontal" :theme="theme1" active-name="1" class="navigation-bar">
        <MenuItem v-for="(menu, index) in menuList" 
        :key="index"  @click.native="navigationToPage"
        :name="index" :style="{width: (100/menuList.length) +'%'}" :title="menu.name" :to="menu.url">
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
                    {name: '首页', url: '/home'},
                    {name: '登录', url: '/login'},
                    {name: '用户', url: '/user'},
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
        },
        methods: {
            navigationToPage: function() {
                console.log('sdfsdf');
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

