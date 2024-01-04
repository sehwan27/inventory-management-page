<template>
  <div>
    <TopNav />
    <div class="container">
      <h3 class="text-start my-4">Products</h3>
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
                <fields-group
                  :fields="createProductSchema"
                  :schemaData="{}"
                  :editMode="true"
                  @inputForm="creatingProduct"
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="close-button"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="create-button"
                  @click="createNewProduct()"
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
    <FooterComponent />
  </div>
</template>

<script>
import productService from "../services/product";
import Table from "@/components/Table.vue";
import schema from "../schema/product/listing";
import createProductSchema from "../schema/product/createProduct";
import { Modal } from "bootstrap";
import FieldsGroup from "@/components/FieldsGroup.vue";

export default {
  name: "Product",
  components: {
    Table,
    FieldsGroup,
  },
  data() {
    return {
      productArr: [],
      formData: {},
      validationResult: {},
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
    async createNewProduct() {
      // this.validateForm()
      const { id } = await productService.createNewProduct(this.formData);
      this.closeCreateProductModal()
      this.viewDetails(id);
    },

    closeCreateProductModal() {
      this.createProductModal.hide()
    },

    viewDetails(id) {
      this.$router.push(`/product/${id}`);
    },
    creatingProduct(fieldName, newValue) {
      this.formData[fieldName] = newValue
    },
    validateForm() {
      console.log('form', this.formData)
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/buttons.scss";
</style>
