<template>
  <Menu
    active-name="1-2"
    theme="dark"
    width="auto"
    :open-names="['1']"
  >
    <Submenu
      v-for="(city, index) in cities"
      :key="'city' + index"
      :name="'city' + index"
    >
      <template slot="title">
        <Icon type="ios-navigate"></Icon>
        {{city.name}}
      </template>
      <MenuItem
        v-for="(branch, i) in city.childern"
        :key="'branch' + i"
        :name="'branch' + i"
      >{{branch}}</MenuItem>
    </Submenu>
  </Menu>
</template>

<script>
export default {
  name: "PageSliderMenu",
  data() {
    return {
      cities: [
        { name: "泉州市", childern: ["晋江", "石狮", "丰泽"] },
        { name: "漳州市", childern: ["长泰"] },
        { name: "永安市", childern: ["永安", "桃源"] },
        { name: "三明市", childern: ["长沙"] }
      ]
    };
  }
};
</script>
