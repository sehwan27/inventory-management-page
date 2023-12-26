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
    </div>
    <fields-group
      :fields="schema"
      :schemaData="resultData"
      :editMode="editMode"
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
    productService
      .getProduct(this.detailsId)
      .then((result) => (this.resultData = result));
  },
  methods: {
    editProduct() {
      this.editMode = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/buttons.scss";
</style>
