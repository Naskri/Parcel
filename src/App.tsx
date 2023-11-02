import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { LoginForm } from './features/Authentication/Forms/LoginForm/LoginForm'
import { RegisterForm } from './features/Authentication/Forms/RegisterForm/RegisterForm'
import { UnlockApp } from './features/Authentication/Forms/UnlockApp/UnlockApp'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="pin" element={<UnlockApp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
