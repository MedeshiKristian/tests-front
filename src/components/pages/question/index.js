import React, { useContext, useEffect, useRef, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { ThemeContext } from '../../context/theme-context'
import { Option, OptionsContainer } from '../task/style'

const markOption = (ref) => {
  ref.current.style.transform = 'scale(1.01)'
  ref.current.style.boxShadow = '0 0 5px 2px teal'
}

const unmarkOption = (ref) => {
  ref.current.style.transform = 'scale(1)'
  ref.current.style.boxShadow = '0.5px 0.5px 3px 0.5px rgba(0, 0, 0, 0.5)'
}

export const Question = observer(({
  question,
  answers,
  setAnswers,
  lock
}) => {
  const { theme } = useContext(ThemeContext)
  const [previous, setPrevious] = useState(null)

  const a = 'a'
  const b = 'b'
  const c = 'c'
  const d = 'd'

  const ref = {
    a: useRef(null),
    b: useRef(null),
    c: useRef(null),
    d: useRef(null)
  }

  const answer = answers[question.id]

  useEffect(() => {
    if (answer !== undefined) {
      markOption(ref[answer])
    } else if (previous) {
      unmarkOption(ref[previous])
    }
    setPrevious(answer)
  }, [answer])

  const onClick = (event, option) => {
    event.preventDefault()
    if (previous === option || lock) {
      return
    }
    if (previous) {
      unmarkOption(ref[previous])
    }
    // markOption(ref[index])
    setAnswers({
      ...answers,
      [question.id]: option
    })
    setPrevious(option)
  }

  return (
    <OptionsContainer>
      <Option ref={ref[a]} onClick={(event) => onClick(event, a)} theme={theme}>
        {question.a}
      </Option>
      <Option ref={ref[b]} onClick={(event) => onClick(event, b)} theme={theme}>
        {question.b}
      </Option>
      <Option ref={ref[c]} onClick={(event) => onClick(event, c)} theme={theme}>
        {question.c}
      </Option>
      <Option ref={ref[d]} onClick={(event) => onClick(event, d)} theme={theme}>
        {question.d}
      </Option>
    </OptionsContainer>
  )
})