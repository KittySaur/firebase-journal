import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/login/SignUp'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  )
}

export default App
