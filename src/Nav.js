import React from 'react'
import logo from './l.svg'

const Nav = () => {
  return (
    <>
    <div className=' row container flex mx-auto px-4 items-center w-full justify-between'>
    
    <div className='container flex w-full  items-center'><img src={logo}  alt="logo" /></div>
  
    <div className='container flex gap-7 ps-44 items-center text-opacity-100 text-xl'>
      <div className='text-opacity-100 text-xl'><a href='home.js'>Home</a></div>
      <div className='text-neutral-800'><a href='home.js'>Flashcard</a></div>
      <div className='text-neutral-800'><a href='home.js'>Contacts</a></div>
      <div className='text-neutral-800'><a href='home.js'>FAQ</a></div> 
      <button className="bg-gradient-to-b from-blue-950 to-blue-600
       hover:bg-blue-800
        text-white 
        font-bold py-2 px-4 rounded-full transition duration-300">
  Login
</button>
        </div>
        </div>
        </>
  )
}

export default Nav