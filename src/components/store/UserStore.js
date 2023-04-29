import { makeAutoObservable } from 'mobx'

export default class UserStore {
  constructor () {
    this._isAuth = false
    makeAutoObservable(this)
  }

  setIsAuth (bool) {
    this._isAuth = bool
  }

  get isAuth () {
    return this._isAuth
  }

  get isAdmin () {
    return this.isAuth && localStorage.getItem('user_role') === 'admin'
  }

  handleAuthIn (response) {
    this.setIsAuth(true)
    localStorage.setItem('user_role', response.data.role)
    localStorage.setItem('token', response.headers.get('Authorization'))
  }

  handleAuthOut () {
    this.setIsAuth(false)
    localStorage.removeItem('user_role')
    localStorage.removeItem('token')
  }
}