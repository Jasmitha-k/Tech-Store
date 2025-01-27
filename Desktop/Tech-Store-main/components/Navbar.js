import React from 'react'
import Link from 'next/link' 

const Navbar = () => {
  return (
    <nav className='flex justify-between px-9 bg-slate-800 text-white py-9'>
        {/* <div className="logo font-bold">Tech Store</div> */}
        <Link href='/'>TECH STORE</Link>
        <ul className='flex gap-6'>
            <Link href='/'><li>Home</li></Link>
            <Link href='/blogpost/some-slug/about'><li>Products</li></Link>
            <Link href='/Checkout'><li>Checkout</li></Link>
            <Link href='/blogpost/some-slug/contact'><li>Contact Us</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar