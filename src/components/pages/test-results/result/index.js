import React, { useEffect, useRef, useState } from 'react'
import { ListItem, SquareButton } from '../../../ui'
import { useNavigate } from 'react-router-dom'
import { getResultPath } from '../../../router'

const TestResult = ({ data }) => {
  const result = data[0]
  const user = data[1]
  const [title, setTitle] = useState(user.email)
  const navigate = useNavigate()

  useEffect(() => {
    const resizeHandler = () => {
      const maxLength = window.innerWidth / 30
      if (user.email.length > maxLength) {
        setTitle(user.email.slice(0, maxLength) + "...")
      } else {
        setTitle(user.email)
      }
      console.log(maxLength)
    }

    resizeHandler()
    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [user.email])

  const handleShowResult = (id) => {
    navigate(getResultPath(id))
  }

  return (
    <ListItem title={title}>
      {result.correct}/{result.total}
      <SquareButton onClick={() => handleShowResult(result.id)}>
        Show result
      </SquareButton>
    </ListItem>
  )
}

export default TestResult