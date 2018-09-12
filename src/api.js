import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'

const instance = axios.create({
  baseURL: 'https://api.github.com',
  adapter: httpAdapter,
})

export default {
  searchUser(username) {
    return instance
      .get(`/users/${username}`)
      .then(result => result.data)
  }
}