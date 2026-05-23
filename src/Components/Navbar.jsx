import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-between relative z-[12] top-5 sticky'>
      <div>
        <h1 className='text-orange-700 font-extrabold text-2xl lg:text-3xl px-5 '>GoMike..</h1>
      </div>
        <div className='flex gap-8 font-bold items-center lg:text-xl px-5'>
            <p className='text-black hover:bg-white rounded-md bg:[length:600px_700px] border-black py-1 px-3 text-lg'>Home</p>
            <p className='text-black hover:bg-white rounded-md bg:[length:600px_700px] border-black py-1 px-3 text-lg'>Destination</p>
            <p className='text-black hover:bg-white rounded-md bg:[length:600px_700px] border-black py-1 px-3 text-lg'>Gallery</p>
            <p className='text-black hover:bg-white rounded-md bg:[length:600px_700px] border-black py-1 px-3 text-lg'>About Us</p>
            <button className='text-white bg-orange-500 rounded-md bg:[length:600px_700px] border-black py-1 px-3 text-lg'>Sign up</button>
        </div>
    </div>
  )
}
