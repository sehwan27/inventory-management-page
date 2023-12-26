import axios from "axios";
import moment from "moment";

export default {
  async getProducts() {
    const result = await axios.get("/products");
    let products = result.data;
    products = products.map((product) => {
      const arr = {
        ...product,
        expiry_datetime_utc: product.expiry_datetime_utc ? moment(product?.expiry_datetime_utc).format("YYYY-MM-DD") : '',
        manufactured_datetime_utc: product.manufactured_datetime_utc ? moment(product?.manufactured_datetime_utc).format("YYYY-MM-DD") : '',
      };
      return arr;
    });
    return products;
  },

  async getProduct(id) {
    const { data } = await axios.get(`/product/${id}`);
    const schemaData = {
      ...data,
      expiry_datetime_utc: data.expiry_datetime_utc ? moment(data?.expiry_datetime_utc).format("YYYY-MM-DD") : '',
      manufactured_datetime_utc: data.manufactured_datetime_utc ? moment(data?.manufactured_datetime_utc).format("YYYY-MM-DD") : '',
      created_datetime_utc: data.created_datetime_utc ? moment(data?.created_datetime_utc).format("YYYY-MM-DD") : '',
    };
    return schemaData;
  },

  async createNewProduct(payload) {
    const { data } = await axios.post("/product", payload);
    return data;
  },
};
