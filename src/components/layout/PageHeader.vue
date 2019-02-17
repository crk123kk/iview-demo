<template>
  <div>
    <Layout>
      <Header class="page-header">
        <div class="app-title">{{headerMessage}}</div>
      </Header>
    </Layout>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  data() {
    return {
      headerMessage: "xxxxxx管理平台"
    };
  }
};
</script>

<style scoped>
.page-header {
  background-color: rgb(49, 43, 163);
}
.app-title {
  color: #ffffff;
  font-size: 24px;
  letter-spacing: 4px;
}
</style>
