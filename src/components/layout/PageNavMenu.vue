<template>
  <div>
    <Menu
      theme="dark"
      mode="horizontal"
      active-name="1"
      class="navigation-bar"
    >
      <MenuItem
        class="navigation-bar-item"
        v-for="(menu, index) in menuList"
        :key="index"
        :name="index"
        :title="menu.name"
        :to="menu.url"
      >
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
        { name: "接收登记", url: "/login" },
        { name: "保管调用", url: "/user" },
        { name: "移送管理", url: "/contentManagement" },
        { name: "处置管理", url: "/settings" },
        { name: "先行处置", url: "/statistics" },
        { name: "审前返还", url: "/statistics" },
        { name: "上缴国库", url: "/statistics" },
        { name: "跟踪监督", url: "/statistics" },
        { name: "查询", url: "/statistics" },
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
  height: 48px;
  line-height: 48px;
  background-color: cornflowerblue;
}

.navigation-bar-item {
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

