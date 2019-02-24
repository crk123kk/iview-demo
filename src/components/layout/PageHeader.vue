<template>
  <div class="header header-bg">
    <Layout>
      <Header class="header-bg">
        <Menu
          mode="horizontal"
          theme="dark"
          active-name="1"
          class="header-bg"
        >
          <div class="header-title">{{headerMessage}}</div>
          <div class="layout-nav">
            <MenuItem name="1">
            <Icon type="ios-navigate"></Icon>
            Item 1
            </MenuItem>
            <MenuItem name="2">
            <Icon type="ios-keypad"></Icon>
            Item 2
            </MenuItem>
            <MenuItem name="3">
            <Icon type="ios-analytics"></Icon>
            Item 3
            </MenuItem>
            <MenuItem name="4">
            <Icon type="ios-paper"></Icon>
            Item 4
            </MenuItem>
          </div>
        </Menu>
      </Header>
    </Layout>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  data() {
    return {
      headerMessage: "财务跨部门集中管理信息平台"
    };
  }
};
</script>

<style scoped>
.header-bg {
  background-color: rgb(0, 112, 193);
}

.header {
  border: 1px solid rgb(0, 112, 193);
  position: relative;
  overflow: hidden;
}

.header-title {
  color: #ffffff;
  font-size: 24px;
  letter-spacing: 4px;
  float: left;
  font-weight: bold;
}

.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>
