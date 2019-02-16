
<template>
    <div class="layout">
        <Layout>
            <Layout :style="{padding: '0 50px'}">
                <Content :style="{margin: '24px 0', minHeight: '280px'}">
                    <Layout>
                        <Sider hide-trigger :style="{background: 'transparent'}">
                            <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                                <Submenu name="1">
                                    <template slot="title">
                                        <Icon type="ios-navigate"></Icon>
                                        Item 1
                                    </template>
                                    <MenuItem name="1-1">Option 1</MenuItem>
                                    <MenuItem name="1-2">Option 2</MenuItem>
                                    <MenuItem name="1-3">Option 3</MenuItem>
                                </Submenu>
                                <Submenu name="2">
                                    <template slot="title">
                                        <Icon type="ios-keypad"></Icon>
                                        Item 2
                                    </template>
                                    <MenuItem name="2-1">Option 1</MenuItem>
                                    <MenuItem name="2-2">Option 2</MenuItem>
                                </Submenu>
                                <Submenu name="3">
                                    <template slot="title">
                                        <Icon type="ios-analytics"></Icon>
                                        Item 3
                                    </template>
                                    <MenuItem name="3-1">Option 1</MenuItem>
                                    <MenuItem name="3-2">Option 2</MenuItem>
                                </Submenu>
                                <Submenu name="4">
                                    <template slot="title">
                                        <Icon type="ios-analytics"></Icon>
                                        Item 4
                                    </template>
                                    <MenuItem name="4-1">Option 1</MenuItem>
                                    <MenuItem name="4-2">Option 2</MenuItem>
                                </Submenu>
                                <Submenu name="5">
                                    <template slot="title">
                                        <Icon type="ios-analytics"></Icon>
                                        Item 5
                                    </template>
                                    <MenuItem name="5-1">Option 1</MenuItem>
                                    <MenuItem name="5-2">Option 2</MenuItem>
                                </Submenu>
                                
                            </Menu>
                        </Sider>
                        <Content :style="{padding: '24px', minHeight: '280px', background: '#fff',margin: '0 24px'}">
                            SDFSDF
                        </Content>
                    </Layout>
                </Content>
            </Layout>
            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
        </Layout>
    </div>
</div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
</style>
