import axios from './base'

export const AuthService = {
  async signUp (userData) {
    return await axios.post(`users`, { user: userData })
  },
  async signIn (userData) {
    return await axios.post(`users/sign_in`, { user: userData })
  },
  async signOut () {
    return await axios.delete(`users/sign_out`, {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    })
  },
}