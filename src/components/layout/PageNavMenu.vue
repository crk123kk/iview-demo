<template>
  <div>
    <Menu
      theme="light"
      mode="horizontal"
      active-name="1"
      class="navigation-bar"
    >
      <MenuItem
        class="navigation-bar-item"
        v-for="(menu, index) in menuList"
        :key="index"
        :name="index"
        :style="{width: (100/menuList.length) +'%'}"
        :title="menu.name"
        :to="menu.url"
      >
      <Icon type="ios-paper" />
      {{menu.name}}
      </MenuItem>
    </Menu>

  </div>
</template>

<script>
export default {
  name: "PageNavMenu",
  data() {
    return {
      menuList: [
        { name: "首页", url: "/home" },
        { name: "登录", url: "/login" },
        { name: "用户", url: "/user" },
        { name: "内容管理", url: "/contentManagement" },
        { name: "设置", url: "/settings" },
        { name: "统计", url: "/statistics" },
        { name: "首页", url: "/home" },
        { name: "登录", url: "/login" },
        { name: "用户", url: "/user" },
        { name: "内容管理", url: "/contentManagement" },
        { name: "设置", url: "/settings" },
        { name: "统计", url: "/statistics" }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.navigation-bar {
  width: 100%;
  overflow: hidden;
}

.navigation-bar-item {
  text-align: center;
  padding: 0 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

