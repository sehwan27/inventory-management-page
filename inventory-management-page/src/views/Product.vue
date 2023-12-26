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
                      v-for="field in createProductSchema"
                      :key="field"
                    >
                      <label for="field.fieldName" class="form-label">{{
                        field.columnName
                      }}</label>
                      <input
                        v-if="field.fieldType !== 'dropdown'"
                        :type="field.fieldType || 'text'"
                        :name="field.fieldName"
                        :id="field.fieldName"
                        class="form-control"
                        v-model="formData[field.fieldName]"
                      />
                      <select
                        name="category"
                        id=""
                        class="form-control"
                        v-if="field.fieldType === 'dropdown'"
                        v-model="formData[field.fieldName]"
                      >
                        <option value="1">Food</option>
                        <option value="2">Electronic</option>
                      </select>
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
                <button type="button" @click="closeCreateProductModal()">
                  cancel
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
        <Table :fields="fields" :dataList="productArr" :actionCol="true">
          <template #default="{ data }">
            <button class="action-button" @click="viewDetails(data.id)">
              VIEW
            </button>
          </template>
        </Table>
      </div>
    </div>
  </div>
</template>

<script>
import productService from "../services/product";
import Table from "../components/Table.vue";
import schema from "../schema/product/listing";
import createProductSchema from "../schema/product/createProduct";
import { Modal } from "bootstrap";

export default {
  name: "Product",
  components: {
    Table,
  },
  data() {
    return {
      productArr: [],
      formData: {},
    };
  },
  computed: {
    fields() {
      return schema;
    },
    createProductSchema() {
      return createProductSchema;
    },
  },
  mounted() {
    this.createProductModal = new Modal('#createProductModal')
    this.formData = {};
    productService.getProducts().then((products) => {
      this.productArr = products;
    });
  },
  methods: {
    async createNewProduct(payload) {
      const { id } = await productService.createNewProduct(payload);
      this.closeCreateProductModal()
      this.viewDetails(id);
    },

    closeCreateProductModal() {
      this.createProductModal.hide()
    },

    viewDetails(id) {
      this.$router.push(`/product/${id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/buttons.scss";
</style>
