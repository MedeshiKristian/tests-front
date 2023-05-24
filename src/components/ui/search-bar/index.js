import React, { useContext, useEffect, useState } from 'react'
import { Container } from './style'
import SearchInput from './input'
import { observer } from 'mobx-react-lite'
import { ThemeContext } from '../../context/theme-context'

const SearchBar = observer(({ predicate, store, setFilteredStore, setPage }) => {
  const [searchText, setSearchText] = useState('')
  const { theme } = useContext(ThemeContext)

  const handleSearchTextChange = (event) => {
    event.preventDefault()
    const { value } = event.target
    setSearchText(value)
  }

  useEffect(() => {
    const matchItems = []
    store.data.map(item => {
      if (predicate(item, searchText)) {
        matchItems.push(item)
      }
    })
    setFilteredStore(matchItems)
    setPage(1)
  }, [searchText])

  useEffect(() => {
    let copyStore = []
    store.data.forEach(course => {
      copyStore.push(course)
    })
    setFilteredStore(copyStore)
  }, [store.data.length])

  return (
    <Container theme={theme}>
      <SearchInput value={searchText} onChange={handleSearchTextChange} c/>
    </Container>
  )
})

export default SearchBar