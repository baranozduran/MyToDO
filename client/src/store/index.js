import { createStore } from "vuex";

export default createStore({
  state: { token: "" },
  mutations: {
    createToken(state, payload) {
      state.token = payload;
    }
  },
  actions: {},
  modules: {}
});
