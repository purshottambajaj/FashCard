import React from 'react'
import { IoIosAddCircle } from "react-icons/io";
import logo from './l.svg'

const Create = () => {
  return (
    <>
    <div className='container flex  p-4 py-20
       items-center w-full justify-between'>
         <div className='container flex w-full  items-center px-14'>
          <img src={logo}  alt="logo"  />
          </div>


         <div className='container flex w-full  items-center justify-end mx-auto px-12'>
          <IoIosAddCircle
          className="text-5xl"
            />
          <span className=' text-blue-900 font-bold text-3xl'>
            Create FlashCard
            </span>
        </div> 
     </div> 
    </>
  )
}

export default Create