<template>
  <div>
    <Table :fields="fields" :studentData="categoryArr"></Table>
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
      fields: ["name", "Name", "Course", "Gender", "Age"],
    };
  },
  mounted() {
    categoryService.getCategories().then((categories) => {
      this.categoryArr = categories;
    });
  },
};
</script>
