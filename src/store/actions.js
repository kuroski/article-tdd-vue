import api from "@/api";

/**
 * @typedef {import("@/types").State} State
 * @typedef {import("@/types").User} User
 */

export default {
  /** 
   * @param {import('vuex').ActionContext<State, State>} context
   * @param {{ username: string }} payload
   * @returns {Promise<User>}
   */
  SEARCH_USER({ commit }, { username }) {
    return api
      .searchUser(username)
      .then((user) => {
        commit("SET_USER", user);
        return Promise.resolve(user);
      })
      .catch((error) => {
        console.error(error);
        return Promise.reject(error);
      });
  },
};
