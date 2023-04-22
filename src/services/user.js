import axios from './base'

export const AuthService = {
  async signUp (user) {
    return await axios.post(`users`, { user })
  },
  async signIn (user) {
    return await axios.post(`users/sign_in`, { user })
  },
  async signOut () {
    return await axios.delete(`users/sign_out`, {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    })
  },
}