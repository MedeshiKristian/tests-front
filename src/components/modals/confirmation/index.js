import React from 'react'
import BaseModal from '../index'
import { Title } from '../style'
import { RoundButton } from '../../ui'

const ConfirmationModal = ({
  title,
  confirm,
  isConfirmationModal,
  setIsConfirmationModal,
  isSubmit,
  children
}) => {
  return (
    <>
      {isConfirmationModal &&
        <BaseModal close={() => setIsConfirmationModal(false)}>
          <Title>{title}</Title>
          {children}
          {isSubmit ?
            <RoundButton onClick={confirm} style={{ padding: '1.5vh 5vw', margin: '10px' }}>Submit</RoundButton>
            :
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <RoundButton onClick={() => {
                setIsConfirmationModal(false)
                confirm()
              }}>OK</RoundButton>
              <RoundButton onClick={() => setIsConfirmationModal(false)}>Cancel</RoundButton>
            </div>
          }
        </BaseModal>}
    </>
  )
}

export default ConfirmationModal