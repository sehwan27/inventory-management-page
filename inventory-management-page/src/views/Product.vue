<template>
  <div>
    <div class="container">
      <h3 class="text-start">Products</h3>
      <div class="row w-100 d-flex justify-content-end mb-3">
        <button
          type="button"
          style="width: 100px"
          class="create-button"
          data-bs-toggle="modal"
          data-bs-target="#createProductModal"
        >
          Create
        </button>

        <div
          class="modal fade modal-lg"
          id="createProductModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Create Product
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="container text-center">
                  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                    <div
                      class="col text-start mb-3"
                      v-for="field in fields"
                      :key="field"
                    >
                      <label for="" class="form-label">{{
                        field.columnName
                      }}</label>
                      <input
                        :type="field.fieldType || 'text'"
                        :name="field.fieldName"
                        :id="field.fieldName"
                        class="form-control"
                        v-model="formData[field.fieldName]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="create-button"
                  @click="createNewProduct(formData)"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
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
import productService from "../services/product";
import Table from "../components/Table.vue";

export default {
  name: "Product",
  components: {
    Table,
  },
  data() {
    return {
      productArr: [],
      formData: {},
      fields: [
        {
          columnName: "Name",
          fieldName: "name",
          fieldType: "text",
        },
        {
          columnName: "Brand",
          fieldName: "brand",
          fieldType: "text",
        },
        {
          columnName: "Quantity",
          fieldName: "quantity",
          fieldType: "number",
        },
        {
          columnName: "Manufactured Date",
          fieldName: "manufactured_datetime_utc",
          fieldType: "date",
        },
        {
          columnName: "Expiry Date",
          fieldName: "expiry_datetime_utc",
          fieldType: "date",
        },
      ],
    };
  },
  mounted() {
    productService.getProducts().then((products) => {
      this.productArr = products;
    });
  },
  methods: {
    async createNewProduct(payload) {
      await productService.createNewProduct(payload);
      productService.getProducts().then((products) => {
        this.productArr = products;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/variables.scss";
@import "@/style/buttons.scss";
</style>
