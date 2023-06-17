import React, { useContext, useEffect, useState } from 'react'
import { CourseService } from '../../services'
import { observer } from 'mobx-react-lite'
import { useParams } from 'react-router-dom'
import { ListItem, List, Pagination, SearchBar } from '../../components/ui'
import CreateTest from '../../components/modals/create-test'
import Test from './test'
import { StoreContext } from '../../components/context/store-context'
import { ThemeContext } from '../../components/context/theme-context'

const CourseTests = observer(() => {
  const { userStore, testsStore } = useContext(StoreContext)
  const [isCreateTestModal, setIsCreateTestModal] = useState(false)
  const params = useParams()
  const testsPerPage = 5
  const [page, setPage] = useState(1)
  const [pageTests, setPageTests] = useState([])
  const [filteredTests, setFilteredTests] = useState([])
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    CourseService.get(params.course_id)
      .then(response => {
        console.log(response.data)
        testsStore.set(response.data.tests)
        // for (let i = 0; i < 100; i++) {
        //   testsStore.add({ topic: `Test ${i}` })
        // }
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
      <SearchBar predicate={predicate}
                 store={testsStore}
                 setFilteredStore={setFilteredTests}
                 setPage={setPage}/>
      <List theme={theme}>
        {pageTests.map((test) => (
          <Test test={test} key={test.id}></Test>
        ))}
        {userStore.isAdmin && <ListItem title={'Add'} onClick={handleTestAdding}/>}
      </List>
      <CreateTest isCreateTestModal={isCreateTestModal}
                  setIsCreateTestModal={setIsCreateTestModal}/>
      <Pagination itemPerPage={testsPerPage}
                  setPage={setPage}
                  page={page}
                  data={filteredTests}
                  setPageItems={setPageTests}/>
    </>
  )
})

export default CourseTests