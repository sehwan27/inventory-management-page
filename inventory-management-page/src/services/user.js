import axios from "axios";

export default {
  async registerUser(payload) {
    const { data } = await axios.post("/user", payload);
    return data;
  },

  async loginUser(payload) {
    const result = await axios.post("/login", payload);
    const { token } = result.data;
    const {status} = result 
    sessionStorage.setItem('token', token)

    return status;
  },
};
