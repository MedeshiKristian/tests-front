import React from 'react'
import { Input, Wrapper } from './style'
import Icon from '../icon'
import { EyeOffOutline, EyeOutline } from 'react-ionicons'
import AuthError from '../error'

const AuthInput = ({
  placeholder,
  name,
  value,
  type,
  BaseIcon: baseIcon,
  onChange,
  visiblePassword,
  setVisiblePassword,
  showError = false,
  onShowError,
  onHideError = ' '
}) => {
  const changePasswordType = () => {
    setVisiblePassword(!visiblePassword)
  }

  return (
    <>
      <Wrapper>
        <Icon BaseIcon={baseIcon}/>
        <Input placeholder={placeholder}
               name={name}
               type={type}
               value={value}
               onChange={onChange}
        />
        {visiblePassword != null &&
          (visiblePassword ?
            <Icon BaseIcon={EyeOutline} onClick={changePasswordType}/>
            :
            <Icon BaseIcon={EyeOffOutline} onClick={changePasswordType}/>)}
      </Wrapper>
      <AuthError show={showError} onShow={onShowError} onHide={onHideError}></AuthError>
    </>
  )
}

export default AuthInput