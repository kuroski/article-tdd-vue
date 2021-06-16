import axios from "axios";
import githubUserDecoder from "@/codables/githubUserDecoder";

const instance = axios.create({
  baseURL: "https://api.github.com",
});

export default {
  /**
   * @param {string} username
   * @returns
   */
  searchUser(username) {
    return instance
      .get(`/users/${username}`)
      .then((result) => result.data)
      .then(githubUserDecoder);
  },
};
