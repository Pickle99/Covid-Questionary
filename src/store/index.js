import { createStore } from "vuex";
import inputData from "@/store/data/index.js";
import rootGetters from "@/store/getters.js";
import rootMutations from "@/store/mutations.js";
import rootActions from "@/store/actions.js";

const store = createStore({
  modules: {
    dataModule: inputData, // formData
  },
  state() {
    return {
      booleans: {
        showCovidDate: false,
        showAntiBody: false,
        showAntiInputs: false,
        showStage: false,
        showCovidInfo: false,
        showWaitingInfo: false,
        showCovidInfoLink: false,
        showLink: false,
      },
    };
  },
  mutations: rootMutations,

  getters: rootGetters,

  actions: rootActions,
});

export default store;
