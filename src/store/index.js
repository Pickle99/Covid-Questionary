import { createStore } from "vuex";
import rootGetters from "./getters";
import rootMutations from "./mutations";
import rootActions from "./actions";
import inputData from "./data/index";

const store = createStore({
  modules: {
    dataModule: inputData, // formData
  },
  state() {
    return {
      count: 1,
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
