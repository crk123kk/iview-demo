<template>
  <div>
    <PageHeader />
    <PageNavMenu />
    <Layout class="page-main">
      <Sider
        class="page-main-slide"
        hide-trigger
      >
        <PageSliderMenu />
      </Sider>
      <Content class="page-main-content">
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
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style scoped>
.page-main {
  padding: 0 50px;
  margin: 24px 0;
}

.page-main-slide {
  background-color: transparent;
}

.page-main-content {
  min-height: 280px;
  background-color: #ffffff;
  padding: 24px;
  margin: 0 24px;
}
</style>
