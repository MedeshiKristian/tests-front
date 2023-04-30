import React, { useContext, useEffect, useState } from 'react'
import { CourseService, TestService } from '../../../services'
import { Context } from '../../../index'
import { observer } from 'mobx-react-lite'
import { useNavigate, useParams } from 'react-router-dom'
import { CardButton, ListItem, ListWrapper, List } from '../../ui'
import CreateTest from '../../modals/create-test'

const Tests = observer(() => {
  const { userStore, testsStore } = useContext(Context)
  const [isCreateTestModal, setIsCreateTestModal] = useState(false)
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    CourseService.get(params.course_id)
      .then(response => {
        console.log(response.data)
        testsStore.set(response.data.tests)
      })
      .catch(error => {
        console.error(error)
      })
  }, [testsStore])

  const handleTestAdding = (event) => {
    event.preventDefault()
    setIsCreateTestModal(true)
  }

  const handleTestShow = (event, id) => {
    event.preventDefault()
    try {
      navigate(`/${id}`)
    } catch (error) {
      console.error(error)
    }
  }

  const handleTestStart = (event, id) => {
    event.preventDefault()
    try {
      navigate(`/test/${id}`)
    } catch (error) {
      console.error(error)
    }
  }

  const handleCourseDelete = (event, id) => {
    event.preventDefault()
    TestService.delete(id)
      .then(response => {
        console.log(response)
        testsStore.delete(id)
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <ListWrapper>
      <List>
        {testsStore.data.map((test) => (
          <ListItem title={test.topic}>
            <CardButton onClick={(event) => handleTestStart(event, test.id, test.topic)}>Start Test</CardButton>
            {userStore.isAdmin &&
              <>
                <CardButton onClick={(event) => handleTestShow(event, test.id)}>
                  Show Test
                </CardButton>
                <CardButton onClick={(event) => handleCourseDelete(event, test.id)}>
                  Delete Test
                </CardButton>
              </>}
          </ListItem>
        ))}
        {userStore.isAdmin && <ListItem title={'Add Test'} onClick={handleTestAdding}/>}
        {(() => {
          const cards = []
          for (let i = 0; i < 10; i++) {
            cards.push(
              <ListItem title={'Test'}>
                <CardButton>Start Test</CardButton>
              </ListItem>)
          }
          return cards
        })()}
      </List>
      {isCreateTestModal && <CreateTest courseID={params.course_id} setIsCreateTestModal={setIsCreateTestModal}/>}
    </ListWrapper>
  )
})

export default Tests