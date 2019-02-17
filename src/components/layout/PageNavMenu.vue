<template>
  <div>
    <Menu
      mode="horizontal"
      :theme="theme1"
      active-name="1"
      class="navigation-bar"
    >
      <MenuItem
        v-for="(menu, index) in menuList"
        :key="index"
        @click.native="navigationToPage"
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
      theme1: "light",
      menuList: [
        { name: "首页", url: "/home" },
        { name: "登录", url: "/login" },
        { name: "用户", url: "/user" },
        { name: "内容管理", url: "/contentManagement" },
        { name: "设置", url: "/settings" },
        { name: "统计", url: "/statistics" }
      ]
    };
  },
  methods: {
    navigationToPage: function() {
      console.log("sdfsdf");
    }
  }
};
</script>

<style scoped>
.navigation-bar {
  width: 100%;
  overflow: hidden;
}

.navigation-bar > li {
  padding: 0 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

