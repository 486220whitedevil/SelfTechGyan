import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const username = sessionStorage.getItem("username")
  return (
    <div className='h-20 w-full bg-gray-500 flex justify-between px-10 items-center text-xl text-white'>
      <h1 className='font-bold text-2xl'>Welcome , {""} <span className='text-yellow-500 text-3xl'>{username ? username : "Guest"}</span></h1>
      <div className='flex gap-8 font-bold'>
        <Link to='/home' className='active:scale-95  hover:bg-amber-400 text-white rounded-lg px-2 py-2'>Home</Link>
        <Link to='/contact' className='active:scale-95  hover:bg-amber-400 text-white rounded-lg px-2 py-2'>Contact</Link>
        
        <Link to='/about' className='active:scale-95  hover:bg-amber-400 text-white rounded-lg px-2 py-2'>About</Link>
        <Link to='/courses' className='active:scale-95  hover:bg-amber-400 text-white rounded-lg px-2 py-2'>Courses</Link>

        <Link 
        onClick={() => sessionStorage.clear()}
        to='/' className='active:scale-95  bg-amber-400 text-white rounded-lg px-2 py-2'>Logout</Link>
        
      </div>
    </div>
  )
}

export default Navbar
