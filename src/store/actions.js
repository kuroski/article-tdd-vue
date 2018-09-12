import api from '@/api'

export default {
  SEARCH_USER({ commit }, { username }) {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await api.searchUser(username)
        commit('SET_USER', user)
        resolve(user)
      } catch(error) {
        reject(error)
      }
    })
  }
}