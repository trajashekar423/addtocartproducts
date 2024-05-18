import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <ul>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="mycart">Cart</Link>
    </li>
   
  </ul>
  )
}

export default Header
