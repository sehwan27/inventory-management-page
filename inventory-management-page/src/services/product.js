import axios from "axios";

export default {
  async getProducts() {
    const result = await axios.get("/products");
    return result.data;
  },
};
