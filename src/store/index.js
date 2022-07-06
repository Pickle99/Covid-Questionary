import { createStore } from "vuex";
import formData from "@/store/data/index.js";
import rootMutations from "@/store/mutations.js";
import rootActions from "@/store/actions.js";

const store = createStore({
  modules: {
    formData: formData,
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

  actions: rootActions,
});

export default store;
