import axios from "axios";
import moment from "moment";

export default {
  async getProducts() {
    const result = await axios.get("/products");
    let products = result.data;
    products = products.map((product) => {
      const arr = {
        ...product,
        expiry_datetime_utc: moment().format("YYYY-MM-DD"),
      };
      return arr;
    });
    return products;
  },

  async createNewProduct(payload) {
    const result = await axios.post("/product", payload);
    return result.data;
  },
};
