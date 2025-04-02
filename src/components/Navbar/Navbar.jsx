import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between w-full'>
        {/* Logo */}
        <Link to="/">
            <h1 className='logo text-2xl md:text-4xl font-bold'>
              Sort
              <span className="bg-gradient-to-r from-violet-700 via-violet-300 to-violet-700 text-transparent bg-clip-text tracking-[3px]">Lab</span>
            </h1>
        </Link>
    </div>
  )
}

export default Navbar