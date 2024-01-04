<template>
  <div class="row w-100">
    <div class="col-md-7">
      <div class="login-img-container">
        <img src="../assets/login.jpg" alt="" />
      </div>
    </div>
    <div class="col-md-5 d-flex align-items-center mt-5">
      <div class="container">
        <h3>Welcome!</h3>
        <p>Please key in all details</p>

        <div class="form-floating mb-3" v-for="field in fields" :key="field">
          <input
            :type="field.fieldType"
            class="form-control"
            :id="field.fieldName"
            :name="field.fieldName"
            placeholder=""
            :required="field.required"
            v-model="formData[field.fieldName]"
          />
          <label :for="field.fieldName"
            >{{ field.columnName }}
            <!-- <span v-if="field.required" class="required">*</span> -->
            </label
          >
          <p class="error-text text-start">
            {{ getErrorText(field.fieldName) }}
          </p>
        </div>

        <div class="w-100">
          <button class="login-button" @click="userSignup()">Sign Up</button>
        </div>

        <div class="mt-3">
          <span>
            <span style="font-size: 13px">Already have an account?</span>
            <router-link to="/login" class="sign-up-link"> Log In</router-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Joi from "joi";
import schema from "@/schema/signup";
import userService from "@/services/user";

export default {
  data() {
    return {
      formData: {},
      validationResult: {},
    };
  },
  computed: {
    fields() {
      return schema;
    },
  },
  methods: {
    async userSignup() {
      await this.validateForm();
      if (this.validationResult) return
      const res = await userService.registerUser(this.formData);
      return res
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
        if (validationSchema)
          acc[fieldName] = validationSchema.label(columnName);
        return acc;
      }, {});
      this.validationResult = Joi.object(newValidationSchema).validate(
        this.formData,
        { abortEarly: false }
      );
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/style/buttons.scss";
@import "@/style/input.scss";

.login-img-container {
  width: 100%;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
}

.sign-up-link {
  margin-top: 30px;
}


</style>
