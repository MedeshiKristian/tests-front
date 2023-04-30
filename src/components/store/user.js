import { makeAutoObservable } from 'mobx'

export default class UserStore {
  constructor () {
    this._isAuth = false
    this._user = null
    makeAutoObservable(this)
  }

  checkStorage() {
    const token = localStorage.getItem('token')
    if (token) {
      this.setIsAuth(true)
      this.setUser(JSON.parse(localStorage.getItem('user')))
    }
  }

  get user() {
    return this._user
  }

  setUser(user) {
    this._user = user
  }

  setIsAuth (bool) {
    this._isAuth = bool
  }

  get isAuth () {
    return this._isAuth
  }

  get isAdmin () {
    return this.isAuth && this.user?.role === 'admin'
  }

  handleAuthIn (response) {
    this.setIsAuth(true)
    this.setUser(response.data)
    localStorage.setItem('user', JSON.stringify(response.data))
    // localStorage.setItem('user_role', response.data.role)
    localStorage.setItem('token', response.headers.get('Authorization'))
  }

  handleAuthOut () {
    this.setIsAuth(false)
    localStorage.removeItem('user_role')
    localStorage.removeItem('token')
  }
}