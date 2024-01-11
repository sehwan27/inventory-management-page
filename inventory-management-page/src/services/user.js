import axios from "axios";

export default {
  async registerUser(payload) {
    const { status } = await axios.post("/register", payload);
    return status;
  },

  async loginUser(payload) {
    const result = await axios.post("/login", payload);
    const { token } = result.data;
    const {status} = result 
    sessionStorage.setItem('token', token)

    return status;
  },
};
