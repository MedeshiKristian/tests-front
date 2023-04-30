import React, { useContext, useState } from 'react'
import { NavBar, Logo, Wrapper, NavLink } from './style.js'
import SignIn from '../modals/sign-in'
import SignUp from '../modals/sign-up'
import { AuthButton } from '../ui'
import { AuthService } from '../../services'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'
import { SchoolOutline } from 'react-ionicons'
import { COLORS } from '../values/colors'

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
          <SchoolOutline color={COLORS.primaryVariant}
                         height="10vh"
                         width="auto"/>
        </Logo>
        <NavBar>
          <NavLink to="/">Courses</NavLink>
          {!userStore.isAuth ?
            <>
              <AuthButton onClick={() => setIsSignUpModal(true)}>Sign up</AuthButton>
              <AuthButton onClick={() => setIsSignInModal(true)}>Sign In</AuthButton>
            </>
            :
            <>
              {userStore?.user?.email}
              <AuthButton onClick={handleSignOut}>Sign Out</AuthButton>
            </>
          }
        </NavBar>
      </Wrapper>
      {isSignUpModal && <SignUp setIsSignUpModal={setIsSignUpModal}
                                setIsSignInModal={setIsSignInModal}/>}
      {isSignInModal && <SignIn setIsSignInModal={setIsSignInModal}
                                setIsSignUpModal={setIsSignUpModal}/>}
    </>
  )
})

export default Header