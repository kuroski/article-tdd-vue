import api from "@/api";

export default {
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
