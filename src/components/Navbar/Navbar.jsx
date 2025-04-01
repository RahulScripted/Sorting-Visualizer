import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between w-full'>
        {/* Logo */}
        <Link to="/">
            <h1 className='logo text-2xl md:text-4xl font-bold'>SortLab</h1>
        </Link>
    </div>
  )
}

export default Navbar