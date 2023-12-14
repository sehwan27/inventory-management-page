<template>
  <div>
    <div class="container">
      <div class="row w-100 d-flex justify-content-end mb-3">
        <button class="create-button" style="width: 100px">Create</button>
      </div>
      <div>
        <Table
          :fields="fields"
          :dataList="productArr"
          :actionCol="true"
        ></Table>
      </div>
    </div>
  </div>
</template>

<script>
import productService from "../services/product"
import Table from "../components/Table.vue";

export default {
  name: "Product",
  components: {
    Table,
  },
  data() {
    return {
      productArr: [],
      fields: [
        {
          columnName: "Name",
          fieldName: "name",
        },
        {
          columnName: "Brand",
          fieldName: "brand",
        },
        {
          columnName: "Quantity",
          fieldName: "quantity",
        },
      ],
    };
  },
  mounted() {
    productService.getProducts().then((products) => {
      this.productArr = products;
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/variables.scss";
@import "@/style/buttons.scss";
</style>
