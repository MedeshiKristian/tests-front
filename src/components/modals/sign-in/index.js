import { AuthForm, AuthButton, AuthInput } from '../../ui'
import TemplateModal from '../index'
import { useContext, useState } from 'react'
import { AuthService } from '../../../services'
import { Context } from '../../../index'
import { LockClosedOutline, MailOutline } from 'react-ionicons'
import { COLORS } from '../../values/colors'
import AuthError from '../../ui/error'

const SignIn = ({ setIsSignInModal, setIsSignUpModal }) => {
  const { userStore } = useContext(Context)

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const [visiblePassword, setVisiblePassword] = useState(false)

  const handleUserDataChange = (event) => {
    const { name, value } = event.target
    setUserData({
      ...userData,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    AuthService.signIn(userData)
      .then(response => {
        userStore.handleAuthIn(response)
        setIsSignInModal(false)
      })
      .catch(error => {
        console.error(error)
      })
  }

  const handleSignUpModalOpening = () => {
    setIsSignUpModal(true)
    setIsSignInModal(false)
  }

  return (
    <TemplateModal title="Sign In" close={() => setIsSignInModal(false)}>
      <AuthForm onSubmit={handleSubmit}>
        <AuthInput placeholder="Email"
                   name="email"
                   type="email"
                   value={userData.email}
                   onChange={handleUserDataChange}
                   BaseIcon={MailOutline}
        />
        <AuthInput placeholder="Password"
                   name="password"
                   value={userData.password}
                   type={visiblePassword ? 'text' : 'password'}
                   onChange={handleUserDataChange}
                   BaseIcon={LockClosedOutline}
                   visiblePassword={visiblePassword}
                   setVisiblePassword={setVisiblePassword}
        />
        <p style={{
          display: 'flex',
          alignItems: 'start',
          paddingRight: '20vw',
          margin: '0px',
          fontSize: '0.95rem'
        }}>
          Don't have an account?
          <span style={{
            color: `${COLORS.primaryVariant}`,
            cursor: 'pointer'
          }} onClick={handleSignUpModalOpening}> Sign Up</span>
        </p>
        <AuthButton type="submit" style={{ padding: '1.5vh 5vw', margin: '10px' }}>Submit</AuthButton>
      </AuthForm>
    </TemplateModal>
  )
}

export default SignIn