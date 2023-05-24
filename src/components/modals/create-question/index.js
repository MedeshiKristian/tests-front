import React, { useContext, useEffect, useState } from 'react'
import ConfirmationModal from '../confirmation'
import { AuthInput } from '../../ui'
import { useParams } from 'react-router-dom'
import { QuestionService } from '../../../services'
import { StoreContext } from '../../context/store-context'

const CreateQuestion = ({
  isCreateQuestionsModal,
  setIsCreateQuestionsModal,
  setAnswers,
  answers
}) => {
  const params = useParams()
  const { questionsStore } = useContext(StoreContext)
  const [questionData, setQuestionData] = useState({
    test_id: params.test_id,
    task: '',
    a: '',
    b: '',
    c: '',
    d: '',
    answer: ''
  })
  const [isError, setError] = useState(true)

  useEffect(() => {
    const answer = questionData.answer.toLowerCase()
    if (answer !== 'a' && answer !== 'b' && answer !== 'c' && answer !== 'd') {
      setError(true)
    } else {
      setError(false)
    }
  }, [questionData.answer])

  const handleQuestionsDataChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    setQuestionData({
      ...questionData,
      [name]: value,
    })
  }

  const handleSubmit = () => {
    const answer = questionData.answer.toLowerCase()
    if (isError) return
    setIsCreateQuestionsModal(false)
    setQuestionData({
      ...questionData,
      'answer': questionData[answer]
    })
    console.log(questionData, answer)
    QuestionService.create(questionData)
      .then(response => {
        questionsStore.add(response.data)
        console.log(response)
        setAnswers({
          ...answers,
          [response.data.id]: answer
        })
      })
      .catch(error => {
        console.error(error)
      })
    setQuestionData({
      test_id: params.test_id,
      task: '',
      a: '',
      b: '',
      c: '',
      d: '',
      answer: ''
    })
  }

  return (
    <ConfirmationModal title="Add question"
                       isConfirmationModal={isCreateQuestionsModal}
                       setIsConfirmationModal={setIsCreateQuestionsModal}
                       isSubmit={true}
                       confirm={handleSubmit}>
      <AuthInput name="task"
                 value={questionData.task}
                 placeholder="Title"
                 onChange={handleQuestionsDataChange}/>
      <AuthInput name="a"
                 value={questionData.a}
                 placeholder="A"
                 onChange={handleQuestionsDataChange}/>
      <AuthInput name="b"
                 value={questionData.b}
                 placeholder="B"
                 onChange={handleQuestionsDataChange}/>
      <AuthInput name="c"
                 value={questionData.c}
                 placeholder="C"
                 onChange={handleQuestionsDataChange}/>
      <AuthInput name="d"
                 value={questionData.d}
                 placeholder="D"
                 onChange={handleQuestionsDataChange}/>
      <AuthInput name="answer"
                 value={questionData.answer}
                 placeholder="Answer: A, B, C or D"
                 onChange={handleQuestionsDataChange}
                 showError={isError}
                 onShowError={'Answer must be A, B, C, or D'}/>
    </ConfirmationModal>
  )
}

export default CreateQuestion