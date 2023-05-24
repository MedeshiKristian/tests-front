import React, { useContext, useEffect, useState } from 'react'
import { List, ListItem } from '../../ui'
import { useParams } from 'react-router-dom'
import { ResultService } from '../../../services'
import { observer } from 'mobx-react-lite'
import Result from './result'
import { StoreContext } from '../../context/store-context'

const TestResults = observer(() => {
  const params = useParams()
  const { testResultsStore } = useContext(StoreContext)

  useEffect(() => {
    ResultService.getResultByTestId(params.test_id)
      .then(response => {
        console.log(response)
        testResultsStore.set(response.data.sort((a, b) => {
          return a[0].total * b[0].correct - a[0].correct * b[0].total
        }))
        console.log(testResultsStore.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <List>
      {testResultsStore.data.map(result => (
        <Result data={result}/>
      ))}
    </List>
  )
})

export default TestResults