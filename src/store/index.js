import { createStore } from "vuex";
import formData from "@/store/data/index.js";

const store = createStore({
  modules: {
    formData: formData,
  },
});

export default store;
