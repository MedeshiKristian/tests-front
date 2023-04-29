import { AuthForm, AuthButton } from '../../ui'
import TemplateModal from '../index'
import { useContext, useState } from 'react'
import { AuthService } from '../../../services/user'
import { Context } from '../../../index'
import AuthInput from '../../ui/input'
import { LockClosedOutline, MailOutline } from 'react-ionicons'

const SignUp = ({ setIsSignUpModal, setIsSignInModal }) => {
  const { user } = useContext(Context)

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  const handleUserDataChange = (event) => {
    const { name, value } = event.target
    setUserData({
      ...userData,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSignUpModal(false)
    AuthService.signUp(userData)
      .then(response => {
        user.handleAuth(response)
      })
      .catch(error => {
        console.error(error)
      })
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
                   type="email"
                   value={userData.email}
                   onChange={handleUserDataChange}
                   Icon={<MailOutline style={{padding:"0"}}/>}
        />
        <AuthInput placeholder="Password"
                   name="password"
                   value={userData.password}
                   type="password"
                   onChange={handleUserDataChange}
                   Icon={<LockClosedOutline style={{padding:"0"}}/>}
        />
        {/*<AuthInput placeholder="Password confirmation"
               name="password confirmation"
               value={userData.password}
               type="password"
               onChange={handleUserDataChange}
        />*/}
        <p style={{
          display: 'flex',
          alignItems: 'start',
          paddingRight: '20vw',
          margin: '0px',
          fontSize: '0.95rem'
        }}>
          Already have an account?
          <span style={{
            color: 'blue',
            cursor: 'pointer'
          }} onClick={handleSignInModalOpening}> Sign In</span>
        </p>
        <AuthButton type="submit">Submit</AuthButton>
      </AuthForm>
    </TemplateModal>
  )
}

export default SignUp