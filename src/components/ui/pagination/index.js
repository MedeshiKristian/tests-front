import React, { useContext, useEffect, useState } from 'react'
import { PageButton, Wrapper } from './style'
import { observer } from 'mobx-react-lite'
import { ThemeContext } from '../../context/theme-context'

const Pagination = observer(({
  itemPerPage,
  setPage,
  page,
  data,
  setPageItems = () => {}
}) => {
  const buttonsCount = 7
  const [numbers, setNumbers] = useState([])
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    let start = (page - 1) * itemPerPage
    let end = page * itemPerPage
    setPageItems(data.slice(start, end))
  }, [page, itemPerPage, data.length])

  useEffect(() => {
    console.log('recalc page numbers')
    const countItems = data.length
    let first = Math.max(1, page - Math.ceil((buttonsCount - 1) / 2))
    let last = Math.min(first + buttonsCount, Math.ceil(countItems / itemPerPage) + 1)
    if (last - first < buttonsCount) {
      first = Math.max(1, last - buttonsCount)
    }
    // console.log(first, last)
    let pageNumbers = []
    for (let i = first; i < last; i++) {
      pageNumbers.push(i)
    }
    setNumbers(pageNumbers)
    // window.scrollTo({top: 0});
  }, [page, data.length, itemPerPage])

  return (
    <Wrapper>
      {numbers.map(number => (
        (number !== page ?
          <PageButton onClick={() => setPage(number)} theme={theme}>
            {number}
          </PageButton>
          :
          <PageButton style={{ boxShadow: '0 0 5px 2px teal' }}
                      onClick={() => setPage(number)}
                      theme={theme}>
            {number}
          </PageButton>)
      ))}
    </Wrapper>
  )
})

export default Pagination