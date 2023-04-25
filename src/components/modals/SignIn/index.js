import { AuthForm, Input, BlueButton } from '../../ui'
import TemplateModal from '../index'
import { useState } from 'react'
import { AuthService } from '../../../services/user'

const SignIn = ({ setIsSignInModal }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
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
    setIsSignInModal(false);
    AuthService.signIn(userData)
      .then(response => {
        localStorage.setItem('user_id', response.data.id)
        localStorage.setItem('token', response.headers.get('Authorization'))
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <TemplateModal title="Sign In" close={() => setIsSignInModal(false)}>
      <AuthForm onSubmit={handleSubmit}>
        <Input placeholder="Email"
               name="email"
               type="email"
               value={userData.email}
               onChange={handleUserDataChange}
        />
        <Input placeholder="Password"
               name="password"
               value={userData.password}
               type="password"
               onChange={handleUserDataChange}
        />
        <BlueButton type="submit">Submit</BlueButton>
      </AuthForm>
    </TemplateModal>
  )
}

export default SignIn