import axios from "axios";

export default {
  async getCategories() {
    const result = await axios.get("/categories");
    return result.data;
  },
};
