import Vue from "vue"

export default {
  /**
   * 
   * @param {import("@/types").State} state 
   * @param {import("@/types").User} user 
   */
  SET_USER(state, user) {
    Vue.set(state, "user", user)
  }
}