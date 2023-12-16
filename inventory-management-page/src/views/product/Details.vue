<template>
  <div>
    <fields-group :fields="schema" :schemaData="resultData" :editMode="false" />
  </div>
</template>

<script>
import productService from "@/services/product";
import FieldsGroup from "../../components/FieldsGroup.vue";
import schema from "../../schema/product/details"

export default {
  data() {
    return {
        resultData:{},
    };

  },
  components: { FieldsGroup },
  computed: {
    schema() {
        return schema
    }
  },
  mounted() {
    productService.getProduct("732aa464-b786-47a2-b248-b0e8d066f914").then(result => this.resultData = result)
  },
};
</script>

<style></style>
