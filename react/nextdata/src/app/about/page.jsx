'use client'; // client compoenent

import Link from 'next/link'
import React, { useState } from 'react'

function page() {

    const [name,setname] = useState("shubham ")

  return (
    <div>
      <h1>Hello this About Page</h1>
      <Link href="/contact">Contact</Link>

      <h1>Name : {name}</h1>
    </div>
  )
}

export default page
