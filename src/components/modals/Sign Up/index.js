import { AuthForm, Input, BlueButton } from '../../ui'
import TemplateModal from '../index'
import { useState } from 'react'
import { AuthService } from '../../../services/user'

const SignUp = ({ setIsSignUpModal }) => {
  const [userData, setUserData] = useState({
    username: '',
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
        localStorage.setItem('user_id', response.data.id)
        localStorage.setItem('token', response.headers.get('Authorization'))
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <TemplateModal title="Sign Up" close={() => setIsSignUpModal(false)}>
      <AuthForm onSubmit={handleSubmit}>
        <Input placeholder="Username"
               name="username"
               type="text"
               value={userData.username}
               onChange={handleUserDataChange}
        />
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

export default SignUp