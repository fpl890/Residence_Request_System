import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    user: {},
  },
  mutations: {
    retreiveToken(state, token) {
      state.token = token
    }
  },
  actions: {
    login(context, userData) {
      axios
        .post("token/", { email: userData.email, password: userData.password })
        .then((response) => {
          const token = response.data.access
          localStorage.setItem('token', token)
          context.commit('retrieveToken', token)
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {},
});
