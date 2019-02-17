<template>
  <Layout>
    <Footer class="page-footer">{{footerMesage}}</Footer>
  </Layout>
</template>
<script>
export default {
  name: "PageFooter",
  data() {
    return {
      footerMesage: "2011-2016 @ TalkingData"
    };
  }
};
</script>

<style scoped>
.page-footer {
  border-top: 1px solid #d7dde4;
  text-align: center;
  /* position: absolute; */
  /* width: 100%; */
  /* bottom: 0; */
}
</style>
