import axios from "axios";

export default {
  async registerUser(payload) {
    const { data } = await axios.post("/user", payload);
    return data;

  }
};
