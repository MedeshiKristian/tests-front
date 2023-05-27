import axios from './base'

export const AuthService = {
  async signUp (userData) {
    return axios.post(`users`, { user: userData })
  },
  async signIn (userData) {
    return axios.post(`users/sign_in`, { user: userData })
  },
  async signOut () {
    return axios.delete(`users/sign_out`, {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    })
  },
}