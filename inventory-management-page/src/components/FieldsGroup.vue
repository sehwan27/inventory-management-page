<template>
  <div>
    <div class="container text-center">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        <div class="col text-start mb-3" v-for="field in fields" :key="field">
          <label :for="field.fieldName" class="form-label">
            {{ field.columnName }}
          </label>
          <span class="required" v-if="field.required"> *</span>
          <input
            v-if="field.fieldType !== 'dropdown'"
            :type="field.fieldType || 'text'"
            :name="field.fieldName"
            :id="field.fieldName"
            class="form-control"
            :value="getFieldValue(field)"
            :disabled="!editMode"
            @input="updateField(field, $event.target.value)"
            :min="getMinNumberInput(field)"
            :max="getMaxNumberInput(field)"
          />
          <select
            :name="field.fieldName"
            :id="field.fieldName"
            v-if="field.fieldType === 'dropdown'"
            class="form-control"
            :disabled="!editMode"
            @change="updateField(field, $event.target.value)"
          >
            <option :selected="!schemaData[field.fieldName]"></option>
            <option
              v-for="selectOption in field.selectOptions"
              :key="selectOption"
              :value="selectOption.value"
              :selected="schemaData[field.fieldName] === selectOption.value"
            >
              {{ selectOption.name }}
            </option>
          </select>
          <span class="error-text">{{ getErrorText(field.fieldName) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Joi from "joi";

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
      validationResult: {},
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
  mounted() {
    this.validateForm();
  },
  methods: {
    getFieldValue(field) {
      return this.editMode
        ? this.formData[field.fieldName]
        : this.schemaData[field.fieldName];
    },
    getFieldValidationSchema(fieldName) {
      const field = this.fields.find((f) => f.fieldName === fieldName);
      return field ? field.validationSchema : "";
    },
    async updateField(field, value) {
      this.formData[field.fieldName] = value;
      await this.validateForm();
      this.$emit("inputForm", field.fieldName, value);
    },
    getErrorText(fieldName) {
      if (this.validationResult.error) {
        const fieldError = this.validationResult.error.details.find(
          (detail) => detail.path[0] === fieldName
        );
        return fieldError ? fieldError.message : "";
      }
      return "";
    },
    async validateForm() {
      const newValidationSchema = this.fields.reduce((acc, field) => {
        const { fieldName, validationSchema, columnName } = field;
        if (validationSchema) acc[fieldName] = validationSchema.label(columnName)
        return acc;
      }, {});
      this.validationResult = Joi.object(newValidationSchema).validate(
        this.formData,
        { abortEarly: false }
      );
    },
    getMinNumberInput(schema) {
      const { min } = schema
      return min ?? false
    },
    getMaxNumberInput(schema) {
      const { max } = schema
      return max ?? false
    }
  },
};
</script>

<style lang="scss" scoped>
.error-text {
  color: red;
  font-size: 12px;
}

.required {
  color: red;
}
</style>
