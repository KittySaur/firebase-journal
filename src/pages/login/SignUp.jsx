import { Form, Input, Button } from './Login.styled'
import { useState, useEffect } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/firebase'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const [error, setError] = useState(false)

  const navigate = useNavigate()
  const validated =
    password === repeatPassword &&
    email !== '' &&
    password !== '' &&
    repeatPassword !== ''
      ? true
      : false

  const handleSubmit = (event) => {
    event.preventDefault()

    if (validated) {
      createUserWithEmailAndPassword(auth, email, password)
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
      setRepeatPassword('')
      setError(false)
    } else {
      setError(true)
    }
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

      <Input
        type="password"
        placeholder="repeat password"
        value={repeatPassword}
        onChange={(event) => setRepeatPassword(event.target.value)}
        required
      />
      <Button type="submit">sign up</Button>
      <Button type="button" onClick={() => navigate('/login')}>
        login
      </Button>

      {error && <span>password does not match</span>}
    </Form>
  )
}

export default SignUp
