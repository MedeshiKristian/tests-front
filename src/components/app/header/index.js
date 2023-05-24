import React, { useContext, useState } from 'react'
import { NavBar, Logo, Container, NavLink, Wrapper, ThemeToggle } from './style.js'
import SignIn from '../../modals/sign-in'
import SignUp from '../../modals/sign-up'
import { RoundButton } from '../../ui'
import { AuthService } from '../../../services'
import { observer } from 'mobx-react-lite'
import { MoonOutline, SchoolOutline, SunnyOutline } from 'react-ionicons'
import { COLORS } from '../../values/colors'
import * as PropTypes from 'prop-types'
import {COURSES_PATH, getUserResultsPath, USER_RESULTS_PATH} from "../../router";
import { StoreContext } from '../../context/store-context'
import { ThemeContext } from '../../context/theme-context'

const Header = observer(() => {
  const { userStore } = useContext(StoreContext)
  const [isSignUpModal, setIsSignUpModal] = useState(false)
  const [isSignInModal, setIsSignInModal] = useState(false)
  const { theme, toggleTheme } = useContext(ThemeContext)

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
      <Container theme={theme}>
        <Wrapper>
          <Logo to="/">
            <SchoolOutline color={COLORS.borderColor}
                           height="70px"
                           width="auto"/>
          </Logo>
          <NavBar>
            <ThemeToggle>
            {theme === 'light' ?
              (<SunnyOutline onClick={toggleTheme}/>)
              : (<MoonOutline onClick={toggleTheme} color="white"/>)}
            </ThemeToggle>
            {!userStore.isAuth ?
              <>
                <RoundButton onClick={() => setIsSignUpModal(true)}>Sign up</RoundButton>
                <RoundButton onClick={() => setIsSignInModal(true)}>Sign In</RoundButton>
              </>
              :
              <>
                {/*{userStore?.user?.email}*/}
                <NavLink to={COURSES_PATH} theme={theme}>Courses</NavLink>
                <NavLink to={getUserResultsPath(userStore.user.id)} theme={theme}>My results</NavLink>
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