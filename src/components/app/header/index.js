import React, { useContext, useState } from 'react'
import { NavBar, Logo, Container, NavLink, Wrapper } from './style.js'
import SignIn from '../../modals/sign-in'
import SignUp from '../../modals/sign-up'
import { RoundButton } from '../../ui'
import { AuthService } from '../../../services'
import { Context } from '../../../index'
import { observer } from 'mobx-react-lite'
import { SchoolOutline } from 'react-ionicons'
import { COLORS } from '../../values/colors'
import * as PropTypes from 'prop-types'

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
      <Container>
        <Wrapper>
          <Logo to="/">
            <SchoolOutline color={COLORS.borderColor}
                           height="70px"
                           width="auto"/>
          </Logo>
          <NavBar>
            {!userStore.isAuth ?
              <>
                <RoundButton onClick={() => setIsSignUpModal(true)}>Sign up</RoundButton>
                <RoundButton onClick={() => setIsSignInModal(true)}>Sign In</RoundButton>
              </>
              :
              <>
                {/*{userStore?.user?.email}*/}
                <NavLink to="/">Courses</NavLink>
                <NavLink to="/results">My results</NavLink>
                {/*<NavLink to="/"*/}
                <RoundButton onClick={handleSignOut}>Sign Out</RoundButton>
              </>
            }
          </NavBar>
        </Wrapper>
      </Container>
      {isSignUpModal && <SignUp setIsSignUpModal={setIsSignUpModal}
                                setIsSignInModal={setIsSignInModal}/>}
      {isSignInModal && <SignIn setIsSignInModal={setIsSignInModal}
                                setIsSignUpModal={setIsSignUpModal}/>}
    </>
  )
})

export default Header