// server compoenent

import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      <h1>Hello this Contact page</h1>
      <Link href="/about">About</Link>
    </div>
  )
}

export default page
