<template>
  <div>
    <div class="container">
      <div class="row w-100 d-flex justify-content-end mb-3">
        <button class="create-button" style="width: 100px">Create</button>
      </div>
      <div>
        <Table
          :fields="fields"
          :dataList="categoryArr"
          :actionCol="true"
        ></Table>
      </div>
    </div>
  </div>
</template>

<script>
import categoryService from "../services/category";
import Table from "../components/Table.vue";

export default {
  name: "my-component",
  components: {
    Table,
  },
  data() {
    return {
      categoryArr: [],
      fields: ["Name"],
    };
  },
  mounted() {
    categoryService.getCategories().then((categories) => {
      this.categoryArr = categories;
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/variables.scss";
@import "@/style/buttons.scss";
</style>
