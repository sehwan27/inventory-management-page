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
    columnName: "Brand",
    fieldName: "brand",
    fieldType: "text",
    validationSchema: Joi.string().required(),
  },
  {
    columnName: "Category",
    fieldName: "category_id",
    fieldType: "dropdown",
    selectOptions: [
      { value: "1", name: "Food" },
      { value: "2", name: "Electronic" }
    ],
    validationSchema: Joi.string().required(),
  },
  {
    columnName: "Quantity",
    fieldName: "quantity",
    fieldType: "number",
    min: 1,
    validationSchema: Joi.string().required(),
  },
  {
    columnName: "Price",
    fieldName: "price",
    fieldType: "text",
    validationSchema: Joi.string().required(),
  },
  {
    columnName: "Manufactured Date",
    fieldName: "manufactured_datetime_utc",
    fieldType: "date",
    validationSchema: Joi.string().required(),
  },
  {
    columnName: "Expiry Date",
    fieldName: "expiry_datetime_utc",
    fieldType: "date",
  },
];
