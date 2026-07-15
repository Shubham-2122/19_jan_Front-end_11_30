import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Register from './pages/Register'
import VerifyOtp from './pages/VerifyOtp'
import Login from './pages/Login'
import ProtectedRoute from './componenet/ProtectedRoute'
import Dashboard from './pages/Dashboard'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword.'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/verify-otp' element={<VerifyOtp />} />
        <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<ProtectedRoute ><Dashboard /> </ProtectedRoute>} />
        <Route  path="/forgot-password" element={<ForgotPassword />} />
        <Route  path="/reset-password" element={<ResetPassword />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App