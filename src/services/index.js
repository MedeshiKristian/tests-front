import axios from './base'
import BaseService from './baseService'

export { AuthService } from './auth'

export const CourseService = BaseService('courses')

export const TestService = BaseService('tests')

export const QuestionService = BaseService('questions')
export const ResultService = {
  __proto__: BaseService(`results`),
  async getResultByTestId(testId) {
    return await axios.get(`tests/results/${testId}`)
  },
  async getResultByUserId(userId) {
    return await axios.get(`users/results/${userId}`)
  }
}