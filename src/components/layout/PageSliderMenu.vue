<template>
  <div class="page-slider">
    <Input
      class="page-slider-search"
      search
      placeholder="Enter something..."
    />
    <Tree
      class="page-slider-tree"
      :data="data1"
    ></Tree>
  </div>
</template>

<script>
export default {
  name: "PageSliderMenu",
  data() {
    return {
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
  }
};
</script>

<style scoped>
.page-slider-tree {
  margin: 16px 0 0 0;
}

.page-slider-tree .ivu-tree-tit {
  color: #ffffff;
}
</style>

