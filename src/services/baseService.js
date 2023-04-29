import axios from './base'

const BaseService = (url) => {
  return {
    async create (data) {
      return await axios.post(url, data)
    },
    async fetch () {
      return await axios.get(url)
    },
    async edit (id, data) {
      return await axios.patch(`${url}/${id}`, data)
    },
    async delete (id) {
      return await axios.delete(`${url}/${id}`)
    },
  }
}

export default BaseService