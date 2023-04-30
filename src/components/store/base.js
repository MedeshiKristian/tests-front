import { makeAutoObservable } from 'mobx'

class BaseStore {
  constructor () {
    this._data = []
    makeAutoObservable(this)
  }

  set (data) {
    this._data = data
  }

  get data () {
    return this._data
  }

  add (item) {
    this._data.push(item)
  }

  delete (id) {
    this.set(this._data.filter(item => item.id !== id))
  }
}

const CreateStore = () => {
  return new BaseStore()
}

export default CreateStore