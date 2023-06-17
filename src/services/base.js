import axios from 'axios'

const myAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

myAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = token
  }
  config.headers['Content-Type'] = 'application/json'
  return config
})

export default myAxios