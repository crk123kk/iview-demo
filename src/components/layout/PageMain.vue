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
        <div>
          <Menu
            theme="light"
            mode="horizontal"
            active-name="1"
            class="menu-tabs"
          >
            <MenuItem
              name="icon"
              class="menu-icon"
              @click.native="collapsedSider"
            >
            <Icon
              :class="rotateIcon"
              :style="{margin: '0 20px'}"
              type="md-menu"
              size="24"
            ></Icon>
            </MenuItem>
            <MenuItem
              class="menu-tabs-item"
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
        { name: "调用财务清单", url: "/home" },
        { name: "调用记录", url: "/login" },
        { name: "归还记录", url: "/user" }
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
  background-color: #ffffff;
  padding: 16px;
  border-right: 1px solid #ddd;
}

.page-main-content {
  min-height: 410px;
  background-color: #ffffff;
  /* padding: 24px; */
  /* margin: 0 24px; */
}

.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}

.ivu-tree-tit {
  color: #ffffff;
}

.menu-icon {
  padding: 0;
}
</style>
