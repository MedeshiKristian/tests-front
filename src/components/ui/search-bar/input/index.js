import React, { useContext } from 'react'
import { Input, Wrapper } from './style'
import Icon from '../../icon'
import { SearchOutline } from 'react-ionicons'
import { ThemeContext } from '../../../context/theme-context'

const SearchInput = ({ text, onChange}) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Wrapper>
      <Icon BaseIcon={SearchOutline}></Icon>
      <Input value={text} onChange={onChange} placeholder="Search..." theme={theme} className="input"/>
    </Wrapper>
  )
}

export default SearchInput