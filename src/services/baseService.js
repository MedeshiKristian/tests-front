import axios from './base'

const BaseService = (url) => {
  return {
    async create (data) {
      return axios.post(url, data)
    },
    async fetch () {
      return axios.get(url)
    },
    async get (id) {
      return axios.get(`${url}/${id}`)
    },
    async edit (id, data) {
      return axios.patch(`${url}/${id}`, data)
    },
    async delete (id) {
      return axios.delete(`${url}/${id}`)
    },
  }
}

export default BaseService