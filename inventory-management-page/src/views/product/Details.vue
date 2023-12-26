<template>
  <div>
    <div class="row w-100 d-flex justify-content-end mb-3">
      <button
        type="button"
        style="width: 100px"
        class="create-button"
        @click="editProduct()"
      >
        Edit
      </button>
      <button
        type="button"
        style="width: 100px"
        class="create-button"
        @click="updateProduct()"
      >
        Save
      </button>
      <button
        type="button"
        style="width: 100px"
        class="create-button"
        @click="cancelEdit()"
      >
        Cancel
      </button>
      <button
        type="button"
        style="width: 100px"
        class="delete-button"
        @click="deleteProduct()"
      >
        Delete
      </button>
    </div>
    <fields-group
      :fields="schema"
      :schemaData="resultData"
      :editMode="editMode"
      @inputForm="updatingProduct"
    />
  </div>
</template>

<script>
import productService from "@/services/product";
import FieldsGroup from "../../components/FieldsGroup.vue";
import schema from "../../schema/product/details";

export default {
  data() {
    return {
      resultData: {},
      editMode: false,
      formData: {},
    };
  },
  components: { FieldsGroup },
  computed: {
    schema() {
      return schema;
    },
    detailsId() {
      return this.$route.params.id;
    },
  },
  mounted() {
    this.refreshGetProduct();
  },
  methods: {
    refreshGetProduct() {
      productService
        .getProduct(this.detailsId)
        .then((result) => (this.resultData = result));
    },
    editProduct() {
      this.editMode = true;
    },
    updatingProduct(fieldName, newValue) {
      this.formData[fieldName] = newValue
    },
    async updateProduct() {
      await productService.updateProduct(this.detailsId, this.formData);
      await this.refreshGetProduct();
      this.editMode = false
    },
    cancelEdit() {
      this.editMode = false
    },
    async deleteProduct() {
      await productService.updateProduct(this.detailsId, { is_deleted: true })
      this.$router.push('/product')
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/buttons.scss";
</style>
