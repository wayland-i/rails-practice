import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
        <Link href={'/'}>Home</Link>
        <Link href={'/productions'}>Productions</Link>
        <Link href={'/about'}>About</Link>
    </div>
  )
}

export default Navbar;