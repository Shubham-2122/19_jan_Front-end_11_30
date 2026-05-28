import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserForm from './Pages/UserForm'
import Header from './Compnent/Header'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<UserForm />} />
      </Routes>
    </div>
    </BrowserRouter>
    
  )
}

export default App
