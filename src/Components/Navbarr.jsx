import React from 'react';

export default function Navbarr() {
  return (
    <div className='flex justify-between relative z-[12] top-5'>
      <div>
        <h1 className='text-orange-700 font-extrabold text-2xl lg:text-3xl px-5'>GoMike..</h1>
      </div>
      {/* Hamburger menu for small screens */}
      <div className="lg:hidden px-5">
        <button className="text-black hover:bg-white rounded-md border-black py-1 px-3 text-lg">
          ☰
        </button>
      </div>
      {/* Menu items */}
      <div className='hidden lg:flex gap-8 font-bold items-center lg:text-xl px-5'>
        <p className='text-black hover:bg-white rounded-md bg-length-700 border-black py-1 px-3 text-lg'>Home</p>
        <p className='text-black hover:bg-white rounded-md bg-length-700 border-black py-1 px-3 text-lg'>Destination</p>
        <p className='text-black hover:bg-white rounded-md bg-length-700 border-black py-1 px-3 text-lg'>Gallery</p>
        <p className='text-black hover:bg-white rounded-md bg-length-700 border-black py-1 px-3 text-lg'>About Us</p>
        <button className='text-white bg-orange-500 rounded-md bg-length-700 border-black py-1 px-3 text-lg'>Sign up</button>
      </div>
    </div>
  );
}
