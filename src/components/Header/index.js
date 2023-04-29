import React, { useContext, useState } from 'react'
import { Nav, Logo, Wrapper } from './style.js'
import SignIn from '../modals/SignIn'
import SignUp from '../modals/SignUp'
import { AuthButton } from '../ui'
import { AuthService } from '../../services/user'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'
import { School, SchoolOutline, Woman } from 'react-ionicons'

const Header = observer(() => {
  const { userStore } = useContext(Context)

  const [isSignUpModal, setIsSignUpModal] = useState(false)
  const [isSignInModal, setIsSignInModal] = useState(false)

  const handleSignOut = (event) => {
    event.preventDefault()
    AuthService.signOut()
      .then(response => {
        console.log(response)
        userStore.handleAuthOut()
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <>
      <Wrapper>
        <Logo to="/">
          <SchoolOutline color="blue"
                  height="12vh"
                  width="auto"
                  font-size="34px"/>
        </Logo>
        <Nav>
          {!userStore.isAuth ?
            <>
              <AuthButton onClick={() => setIsSignUpModal(true)}>Sign up</AuthButton>
              <AuthButton onClick={() => setIsSignInModal(true)}>Sign In</AuthButton>
            </>
            :
            <>
              <AuthButton onClick={handleSignOut}>Sign Out</AuthButton>
            </>
          }
        </Nav>
      </Wrapper>
      {isSignUpModal && <SignUp setIsSignUpModal={setIsSignUpModal}
                                setIsSignInModal={setIsSignInModal}/>}
      {isSignInModal && <SignIn setIsSignInModal={setIsSignInModal}
                                setIsSignUpModal={setIsSignUpModal}/>}
    </>
  )
})

export default Header