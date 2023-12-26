<template>
  <div>
    <div class="container text-center">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        <div class="col text-start mb-3" v-for="field in fields" :key="field">
          <label :for="field.fieldName" class="form-label">{{
            field.columnName
          }}</label>
          <input
            :type="field.fieldType || 'text'"
            :name="field.fieldName"
            :id="field.fieldName"
            class="form-control"
            :value="getFieldValue(field)"
            :disabled="!editMode"
            @input="updateField(field, $event.target.value)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fields: {
      type: Array,
      required: true,
    },
    schemaData: {
      type: Object,
    },
    editMode: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      formData: { ...this.schemaData },
    };
  },
  watch: {
    schemaData: {
      immediate: true,
      handler(newValue) {
        this.formData = { ...newValue };
      },
    },
    editMode(newVal) {
      if (!newVal) {
        this.formData = { ...this.schemaData };
      }
    },
  },
  methods: {
    getFieldValue(field) {
      return this.editMode
        ? this.formData[field.fieldName]
        : this.schemaData[field.fieldName];
    },
    updateField(field, value) {
      this.$emit('inputForm', field.fieldName, value)
    },
  },
};
</script>

<style></style>
