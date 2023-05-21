import React, { useContext, useEffect, useState } from 'react'
import { CourseService, TestService } from '../../../services'
import { Context } from '../../../index'
import { observer } from 'mobx-react-lite'
import { useParams } from 'react-router-dom'
import { ListItem, ListWrapper, List, Pagination, SearchBar } from '../../ui'
import CreateTest from '../../modals/create-test'
import Test from './test'

const Tests = observer(() => {
  const { userStore, testsStore } = useContext(Context)
  const [isCreateTestModal, setIsCreateTestModal] = useState(false)
  const params = useParams()
  const testsPerPage = 5
  const [page, setPage] = useState(1)
  const [pageTests, setPageTests] = useState([])
  const [countItems, setCountItems] = useState(0)
  const [filteredTests, setFilteredTests] = useState([])

  useEffect(() => {
    CourseService.get(params.course_id)
      .then(response => {
        console.log(response.data)
        testsStore.set(response.data.tests)
        for (let i = 0; i < 100; i++) {
          testsStore.add({ topic: `Test ${i}` })
        }
        setPage(1)
      })
      .catch(error => {
        console.error(error)
      })
  }, [params.course_id, testsStore])

  const handleTestAdding = (event) => {
    event.preventDefault()
    setIsCreateTestModal(true)
  }

  const predicate = (test, text) => {
    if (text === '') {
      return true
    }
    return test.topic.toLowerCase().includes(text.toLowerCase())
  }

  return (
    <>
      <ListWrapper>
        <SearchBar predicate={predicate}
                   store={testsStore}
                   setFilteredStore={setFilteredTests}
                   setPage={setPage}/>
        <List>
          {pageTests.map((test) => (
            <Test test={test} key={test.id}></Test>
          ))}
          {userStore.isAdmin && <ListItem title={'Add Test'} onClick={handleTestAdding}/>}
        </List>
        <CreateTest courseID={params.course_id}
                    isCreateTestModal={isCreateTestModal}
                    setIsCreateTestModal={setIsCreateTestModal}/>
      </ListWrapper>
      <Pagination itemPerPage={testsPerPage}
                  countItems={countItems}
                  setPage={setPage}
                  page={page}
                  data={filteredTests}
                  setPageItems={setPageTests}/>
    </>
  )
})

export default Tests