import React from 'react'
import Header from '../Coman/Header'
import Footer from '../Coman/Footer'

function About() {
  return (
    <div>
        <Header />
      <h1 className='p-5 bg-success'>About Page</h1>

        <a href="" className='btn btn-info'>About 1</a>
        <a href="" className='btn btn-primary'>About 2</a>
        <Footer />
    </div>
  )
}

export default About
