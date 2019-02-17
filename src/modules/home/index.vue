<template>
  <Layout class="index-page" :style="{height: screenH +'px'}">
    <Content class="index-main">
      <div class="index-main-form">
        <Select
          v-model="model1"
          style="width:200px"
        >
          <Option
            v-for="item in cityList"
            :value="item.value"
            :key="item.value"
          >{{ item.label }}</Option>
        </Select>
      </div>
      <div class="main-table">
        <Table
          border
          :columns="columns12"
          :data="data6"
        >
          <template
            slot-scope="{ row }"
            slot="name"
          >
            <strong>{{ row.name }}</strong>
          </template>
          <template
            slot-scope="{ row, index }"
            slot="action"
          >
            <Button
              type="primary"
              size="small"
              style="margin-right: 5px"
              @click="show(index)"
            >View</Button>
            <Button
              type="error"
              size="small"
              @click="remove(index)"
            >Delete</Button>
          </template>
        </Table>
      </div>
    </Content>
  </Layout>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      columns12: [
        {
          title: "Name",
          slot: "name"
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        },
        {
          title: "Action",
          slot: "action",
          width: 150,
          align: "center"
        }
      ],
      data6: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park"
        }
      ],
      cityList: [
        {
          value: "New York",
          label: "New York"
        },
        {
          value: "London",
          label: "London"
        },
        {
          value: "Sydney",
          label: "Sydney"
        },
        {
          value: "Ottawa",
          label: "Ottawa"
        },
        {
          value: "Paris",
          label: "Paris"
        },
        {
          value: "Canberra",
          label: "Canberra"
        }
      ],
      model1: "",
    };
  },
  computed: {
    screenH: function () {
      console.log(window.screen.height);
      let h = window.screen.height - 390;
      return h;
    }
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `Name：${this.data6[index].name}<br>Age：${
          this.data6[index].age
        }<br>Address：${this.data6[index].address}`
      });
    },
    remove(index) {
      this.data6.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.menu-tabs {
  width: 100%;
  overflow: hidden;
  /* background-color: rgb(203, 204, 153); */
}

.menu-tabs-item {
  text-align: center;
  padding: 0 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.index-main {
  padding: 16px;
  margin: 16px;
  background: #ffffff;
}

.index-main-form {
  padding: 8px;
}
.main-table {
  margin: 8px;
}
</style>


