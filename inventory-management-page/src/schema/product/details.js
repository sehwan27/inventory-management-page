export default [
    {
      columnName: "Name",
      fieldName: "name",
      fieldType: "text",
    },
    {
      columnName: "Brand",
      fieldName: "brand",
      fieldType: "text",
    },
    {
      columnName: "Category",
      fieldName: "category_id",
      fieldType: "dropdown",
      selectOptions: [
        { value: "1", name: "Food" },
        { value: "2", name: "Electronic" }
      ]
    },
    {
      columnName: "Quantity",
      fieldName: "quantity",
      fieldType: "number",
    },
    {
      columnName: "Price",
      fieldName: "price",
      fieldType: "text",
    },
    {
      columnName: "Manufactured Date",
      fieldName: "manufactured_datetime_utc",
      fieldType: "date",
    },
    {
      columnName: "Expiry Date",
      fieldName: "expiry_datetime_utc",
      fieldType: "date",
    },
  ]