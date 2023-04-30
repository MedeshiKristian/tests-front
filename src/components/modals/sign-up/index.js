import { AuthForm, AuthButton } from '../../ui'
import TemplateModal from '../index'
import { useContext, useEffect, useState } from 'react'
import { AuthService } from '../../../services'
import { Context } from '../../../index'
import AuthInput from '../../ui/input'
import { LockClosedOutline, MailOutline } from 'react-ionicons'
import { COLORS } from '../../values/colors'

const SignUp = ({ setIsSignUpModal, setIsSignInModal }) => {
  const { userStore } = useContext(Context)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('')
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    passwordConfirmation: ''
  })
  const [visiblePassword, setVisiblePassword] = useState(false)

  useEffect(() => {
    if (userData.password < 8) {
      setPasswordError(true)
      setPasswordErrorMessage('Password must be at least 8 characters.')
    } else if (userData.password !== userData.passwordConfirmation) {
      setPasswordError(true)
      setPasswordErrorMessage('Passwords do not match.')
    } else {
      setPasswordError(false)
    }
  }, [userData])

  const handleUserDataChange = (event) => {
    const { name, value } = event.target
    setUserData({
      ...userData,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(userData)
    if (!passwordError) {
      AuthService.signUp(userData)
        .then(response => {
          userStore.handleAuthIn(response)
          setIsSignUpModal(false)
          setEmailError(false)
        })
        .catch(error => {
          setEmailError(true)
          console.error(error)
        })
    }
  }

  const handleSignInModalOpening = () => {
    setIsSignInModal(true)
    setIsSignUpModal(false)
  }

  return (
    <TemplateModal title="Sign Up" close={() => setIsSignUpModal(false)}>
      <AuthForm onSubmit={handleSubmit}>
        <AuthInput placeholder="Email"
                   name="email"
                   value={userData.email}
                   onChange={handleUserDataChange}
                   type="email"
                   registerValue="email"
                   BaseIcon={MailOutline}
                   showError={emailError}
                   onShowError={'This email is already used.'}
        />
        <AuthInput placeholder="Password"
                   name="password"
                   value={userData.password}
                   onChange={handleUserDataChange}
                   type={visiblePassword ? 'type' : 'password'}
                   BaseIcon={LockClosedOutline}
                   visiblePassword={visiblePassword}
                   setVisiblePassword={setVisiblePassword}
                   showError={passwordError}
                   onShowError={passwordErrorMessage}
                   onHideError={'Passwords match.'}
        />
        <AuthInput placeholder="Password confirmation"
                   name="passwordConfirmation"
                   value={userData.passwordConfirmation}
                   onChange={handleUserDataChange}
                   type={visiblePassword ? 'type' : 'password'}
                   BaseIcon={LockClosedOutline}
        />
        <p style={{
          display: 'flex',
          alignItems: 'start',
          paddingRight: '20vw',
          margin: '0px',
          fontSize: '0.95rem'
        }}>
          Already have an account?
          <span style={{
            color: `${COLORS.primaryVariant}`,
            cursor: 'pointer',
            whiteSpace: 'pre-wrap'
          }} onClick={handleSignInModalOpening}>{' Sign Up'}</span>
        </p>
        <AuthButton type="submit" style={{ padding: '1.5vh 5vw', margin: '10px' }}>Submit</AuthButton>
      </AuthForm>
    </TemplateModal>
  )
}

export default SignUp