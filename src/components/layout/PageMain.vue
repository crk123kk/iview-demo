<template>
  <div>
    <PageHeader />
    <PageNavMenu />
    <Layout class="page-main">
      <Sider
        class="page-main-slide"
        hide-trigger
        ref="side1"
        collapsible
        :collapsed-width="0"
        v-model="isCollapsed"
      >
        <PageSliderMenu />
      </Sider>
      <Content class="page-main-content">
        <div class="main-content-header">
          <Menu
            theme="light"
            mode="horizontal"
            active-name="0"
            class="menu-tabs"
          >
            <div
              name="icon"
              class="menu-icon"
              @click="collapsedSider"
            >
              <Icon
                :class="rotateIcon"
                :style="{margin: '0 20px'}"
                type="md-menu"
                size="24"
              ></Icon>
            </div>
            <MenuItem
              class="menu-tabs-item"
              v-for="(menu, index) in menuList"
              :key="index"
              :name="index+''"
              :title="menu.name"
              :to="menu.url"
            >
            {{menu.name}} ({{menu.number}})
            </MenuItem>
          </Menu>
        </div>
        <router-view></router-view>
      </Content>
    </Layout>
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from "./PageHeader";
import PageNavMenu from "./PageNavMenu";
import PageFooter from "./PageFooter";
import PageSliderMenu from "./PageSliderMenu";
export default {
  name: "PageMain",
  components: {
    PageHeader,
    PageNavMenu,
    PageFooter,
    PageSliderMenu
  },
  data() {
    return {
      menuList: [
        { name: "调用财务清单", url: "/home", number: "12" },
        { name: "调用记录", url: "/home", number: "0" },
        { name: "归还记录", url: "/home", number: "1" }
      ],
      isCollapsed: false,
      data1: [
        {
          title: "福建省",
          expand: true,
          children: [
            {
              title: "泉州市",
              expand: true,
              children: [
                {
                  title: "晋江"
                },
                {
                  title: "石狮"
                },
                {
                  title: "丰泽"
                }
              ]
            },
            {
              title: "漳州市",
              expand: true,
              children: [
                {
                  title: "长泰"
                }
              ]
            },
            {
              title: "福州市",
              expand: true,
              children: [
                {
                  title: "闽侯"
                },
                {
                  title: "福清"
                }
              ]
            },
            {
              title: "三明",
              expand: true,
              children: [
                {
                  title: "沙县"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    }
  }
};
</script>

<style scoped>
.page-main-slide {
  background-color: #eeeeee;
  padding: 16px;
  border-right: 1px solid #ddd;
}

.page-main-content {
  min-height: 410px;
  background-color: #ffffff;
  /* padding: 24px; */
  /* margin: 0 24px; */
}

.main-content-header ul {
  height: 48px;
  line-height: 48px;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}

.menu-icon {
  padding: 0;
  float: left;
  padding: 6px 0;
}
</style>
