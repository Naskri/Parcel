import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { LoginForm } from './features/Authentication/Forms/LoginForm/LoginForm'
import { RegisterForm } from './features/Authentication/Forms/RegisterForm/RegisterForm'
import { UnlockApp } from './features/Authentication/Forms/UnlockApp/UnlockApp'
import { UpdatePIN } from './features/Authentication/Forms/UpdatePIN/UpdatePIN'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ProtectedRoute } from './features/UI/ProtectedRoute/ProtectedRoute'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="pin" element={<UnlockApp />} />
          <Route path="pin/update" element={<UpdatePIN />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <h1>Hi!</h1>
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}
