import React from 'react'
import { Input, Wrapper, ErrorMessage } from './style'
import Icon from '../icon'
import { EyeOffOutline, EyeOutline } from 'react-ionicons'

const AuthInput = ({
  placeholder,
  name,
  value,
  type,
  BaseIcon,
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
        <Icon BaseIcon={BaseIcon}/>
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
      {showError ?
        (<ErrorMessage style={{ whiteSpace: 'pre-wrap' }}>
          {onShowError}
        </ErrorMessage>)
        :
        (<ErrorMessage style={{ whiteSpace: 'pre-wrap', color: 'green' }}>
          {onHideError}
        </ErrorMessage>)
      }
    </>
  )
}

export default AuthInput