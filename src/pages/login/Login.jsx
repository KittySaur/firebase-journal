import React from 'react'
import { Form, Input, Button } from './Login.styled'
import { useState, useEffect } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/firebase'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
        setError(false)
      })
      .catch((error) => {
        setError(true)
      })
    setEmail('')
    setPassword('')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <Input
        type="password"
        placeholder="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />
      <Button type="submit">login</Button>
      <Button type="button" onClick={() => navigate('/sign-up')}>
        sign up
      </Button>

      {error && <span>wrong email or password</span>}
    </Form>
  )
}

export default Login
