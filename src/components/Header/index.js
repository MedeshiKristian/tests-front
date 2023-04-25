import React, { useState } from 'react'
import { Nav, Logo, Wrapper } from './styles.js'
import logo from '../../school-outline.svg'
import SignIn from '../modals/SignIn'
import SignUp from '../modals/Sign Up'
import { BlueButton } from '../ui'
import { AuthService } from '../../services/user'

const Header = () => {
  const [isSignUpModal, setIsSignUpModal] = useState(false)
  const [isSignInModal, setIsSignInModal] = useState(false)

  const handleSignOut = (event) => {
    event.preventDefault()
    AuthService.signOut()
      .then(response => {
        console.log(response.data)
        localStorage.removeItem('user_id')
        localStorage.removeItem('token')
      })
      .catch(error => console.error(error))
  }

  return (
    <>
      <Wrapper>
        <Logo>
          <img src={logo} alt="logo"/>
        </Logo>
        <Nav>
          {/*<Link>Courses</Link>*/}
          <BlueButton onClick={() => setIsSignUpModal(true)}>Sign up</BlueButton>
          <BlueButton onClick={() => setIsSignInModal(true)}>Sign In</BlueButton>
          <BlueButton onClick={handleSignOut}>Sign Out</BlueButton>
        </Nav>
      </Wrapper>
      {isSignInModal && (<SignIn setIsSignInModal={setIsSignInModal}/>)}
      {isSignUpModal && (<SignUp setIsSignUpModal={setIsSignUpModal}/>)}
    </>
  )
}

export default Header