import React, { useContext, useEffect } from 'react'
import { List } from '../../ui'
import { ResultService } from '../../../services'
import Result from './result-list'
import { observer } from 'mobx-react-lite'
import { useParams } from 'react-router-dom'
import { StoreContext } from '../../context/store-context'

const UserResults = observer(() => {
  const { userResultsStore } = useContext(StoreContext)
  const params = useParams()

  useEffect(() => {
    ResultService.getResultByUserId(params.user_id)
      .then(response => {
        console.log(response)
        userResultsStore.set(response.data.reverse())
      })
      .catch(error => {
        console.error(error)
      })
  }, [params.user_id, userResultsStore])

  return (
    <List>
      {userResultsStore.data.map(result => (
        <Result item={result}/>
      ))}
    </List>
  )
})

export default UserResults