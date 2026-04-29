import React from 'react'
import Home from './website/pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './website/pages/About'
import Blogs from './website/pages/Blogs'
import BlogsDati from './website/pages/BlogsDati'
import Contact from './website/pages/Contact'
import Price from './website/pages/Price'
import Package from './website/pages/Package'
import PackageDtai from './website/pages/PackageDtai'
import Services from './website/pages/Services'
import NotFound from './website/pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blogsd' element={<BlogsDati />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/price' element={<Price />} />
          <Route path='/package' element={<Package />} />
          <Route path='/packaged' element={<PackageDtai />} />
          <Route path='/service' element={<Services />} />


          <Route path='*' element={<NotFound />} />


        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App