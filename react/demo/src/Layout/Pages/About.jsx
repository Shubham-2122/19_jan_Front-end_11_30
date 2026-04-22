import React from 'react'
import Header from '../Coman/Header'
import Footer from '../Coman/Footer'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
        <Header />
      <h1 className='p-5 bg-success'>About Page</h1>

        <Link to="about1" className='btn btn-info'>About 1</Link>
        <Link to="about2" className='btn btn-primary'>About 2</Link>

        <Outlet />
        <Footer />
    </div>
  )
}

export default About
