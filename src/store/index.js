import Vue from "vue";
import Vuex from "vuex";
import state from "@/store/state";
import mutations from "@/store/mutations";
import actions from "@/store/actions";

Vue.use(Vuex);

/**
 * `any` is being used here since testing-library store config
 * doesn't allow to provide a store State type, in order to compile
 * we explicitly provide `any` here, but internally we use `State` type
 * to provide autocompletion
 *
 * @type {import("vuex").StoreOptions<any>}
 */
export const storeConfig = {
  strict: true,
  state,
  mutations,
  actions,
};

export default new Vuex.Store(storeConfig);
