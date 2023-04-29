import { makeAutoObservable } from 'mobx'
import { CourseService } from '../../services'
import courses from '../Courses'

export default class CoursesStore {
  constructor () {
    this._courses = []
    makeAutoObservable(this)
  }

  setCourses(courses) {
    this._courses = courses
  }

  get courses() {
    return this._courses
  }

  add(course) {
    this._courses.push(course)
  }

  delete(id) {
    this.setCourses(this.courses.filter(course => course.id !== id))
  }
}