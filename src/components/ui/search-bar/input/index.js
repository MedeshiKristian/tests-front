import React from 'react'
import { Input, Wrapper } from './style'
import Icon from '../../icon'
import { SearchOutline } from 'react-ionicons'

const SearchInput = ({ text, onChange}) => {
  return (
    <Wrapper>
      <Icon BaseIcon={SearchOutline}></Icon>
      <Input value={text} onChange={onChange}>

      </Input>
    </Wrapper>
  )
}

export default SearchInput