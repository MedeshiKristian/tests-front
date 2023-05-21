import React, { useEffect, useState } from 'react'
import { PageButton, Wrapper } from './style'
import { observer } from 'mobx-react-lite'

const Pagination = observer(({
  itemPerPage,
  setPage,
  page,
  data,
  setPageItems = () => {}
}) => {
  const [numbers, setNumbers] = useState([])
  const buttonsCount = 7
  const [countItems, setCountItems] = useState(0)

  useEffect(() => {
    let start = (page - 1) * itemPerPage
    let end = page * itemPerPage
    setPageItems(data.slice(start, end))
    setCountItems(data.length)
  }, [page, data])

  useEffect(() => {
    let first = Math.max(1, page - Math.ceil((buttonsCount - 1) / 2))
    let last = Math.min(first + buttonsCount, Math.ceil(countItems / itemPerPage) + 1)
    if (last - first < buttonsCount) {
      first = Math.max(1, last - buttonsCount)
    }
    last = Math.max(last, first + 1)
    console.log(first, last)
    let pageNumbers = []
    for (let i = first; i < last; i++) {
      pageNumbers.push(i)
    }
    setNumbers(pageNumbers)
    // window.scrollTo({top: 0});
  }, [countItems, page])

  return (
    <Wrapper>
      {numbers.map(number => (
        (number !== page ?
          <PageButton onClick={() => setPage(number)}>
            {number}
          </PageButton>
          :
          <PageButton style={{ boxShadow: '0 0 5px 2px teal' }}
                      onClick={() => setPage(number)}>
            {number}
          </PageButton>)
      ))}
    </Wrapper>
  )
})

export default Pagination