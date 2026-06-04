import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserForm from './Pages/UserForm'
import Header from './Compnent/Header'
import EditData from './Pages/EditData'
import AdminData from './Pages/AdminData'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<UserForm />} />
          <Route path='/edit/:id' element={<EditData />} />

          <Route path='/admin' element={<AdminData />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
