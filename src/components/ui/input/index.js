import React from 'react'
import { Input, Wrapper } from './style'

const AuthInput = ({placeholder, name, value, type, Icon, onChange}) => {
  return (
    <Wrapper>
      {Icon}
      <Input placeholder={placeholder}
             name={name}
             value={value}
             type={type}
             onChange={onChange}
      />
    </Wrapper>
  )
}

export default AuthInput