import Joi from "joi"

export default [
  {
    columnName: "Name",
    fieldName: "name",
    fieldType: "text",
    required: true,
    validationSchema: Joi.string().required().min(2)
  },
  {
    columnName: "Email",
    fieldName: "email",
    fieldType: "email",
    required: true,
    validationSchema: Joi.string().required(),
  },
  {
    columnName: "Password",
    fieldName: "password",
    fieldType: "password",
    required: true,
    validationSchema: Joi.string().required(),
  },
  {
    columnName: "Retype Password",
    fieldName: "retype_password",
    fieldType: "password",
    required: true,
    validationSchema: Joi.string().required(),
  },
];
