import React, { useContext } from 'react'
import { Question } from '../question'
import { ThemeContext } from '../../components/context/theme-context'
import { QuestionWrapper, Title } from './style'

const TaskQuestions = ({ question, answers, lock, setAnswers, children }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <QuestionWrapper key={question.id}
                     style={{ margin: '10px', width: '90%' }} theme={theme}>
      <Title>{question.task}</Title>
      <Question question={question}
                answers={answers}
                lock={lock}
                setAnswers={setAnswers}/>
      {lock && question.answer}
      {children}
    </QuestionWrapper>
  )
}

export default TaskQuestions