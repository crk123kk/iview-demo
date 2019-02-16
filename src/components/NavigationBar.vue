<template>
    <div>
    <Menu mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem name="1">
            <Icon type="ios-paper" />
            内容管理
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-people" />
            用户管理
        </MenuItem>
        <MenuItem name="3">
            <Icon type="ios-people" />
            统计分析
        </MenuItem>
        <MenuItem name="4">
            <Icon type="ios-people" />
            用户管理
        </MenuItem>
        <MenuItem name="5">
            <Icon type="ios-people" />
            用户管理
        </MenuItem>
        <MenuItem name="6">
            <Icon type="ios-people" />
            用户管理
        </MenuItem>
        <MenuItem name="7">
            <Icon type="ios-people" />
            用户管理
        </MenuItem>
        <MenuItem name="8">
            <Icon type="ios-people" />
            用户管理
        </MenuItem>
        <MenuItem name="9">
            <Icon type="ios-people" />
            用户管理
        </MenuItem>
        <MenuItem name="10">
            <Icon type="ios-people" />
            用户管理
        </MenuItem>
        <MenuItem name="11">
            <Icon type="ios-construct" />
            综合设置
        </MenuItem>
    </Menu>

    </div>
</template>

<script>
    export default {
        name: 'NavigationBar',
        data () {
            return {
                theme1: 'light'
            }
        }
    }
</script>
