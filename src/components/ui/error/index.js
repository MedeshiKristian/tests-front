import React from 'react'
import { ErrorMessage } from './style'

const AuthError = ({
  show = false,
  onShow,
  onHide
}) => {
  return (
    <>
      {(() => {
        if (show) {
          return <ErrorMessage style={{ whiteSpace: 'pre-wrap' }}>{onShow}</ErrorMessage>
        } else {
          return <ErrorMessage style={{ whiteSpace: 'pre-wrap', color:"green" }}>{onHide}</ErrorMessage>
        }
      })()}
    </>
  )
}

export default AuthError