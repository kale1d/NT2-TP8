import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const APIURL = "https://629d30e03798759975e10eeb.mockapi.io/api/v1/postusers";

export default new Vuex.Store({
  state: {
    usuarios: [],
  },
  actions: {
    async postUser(user) {
      try {
        await axios.post(APIURL, user, {
          "content-type": "application/json",
        });
        return true;
      } catch (e) {
        console.log(e.message);
        return false;
      }
    },
    async getUsers({ commit }) {
      try {
        const { data } = await axios(APIURL);
        console.log(data);
        commit("setUsers", data);
      } catch (e) {
        console.warn(e.message);
      }
    },
  },
  mutations: {
    setUsers(state, users) {
      state.usuarios = users;
    },
  },
});
