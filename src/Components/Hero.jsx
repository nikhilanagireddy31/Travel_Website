import React from 'react'
import Vid from '../assets/travelbg.mp4'
import { TfiSearch } from "react-icons/tfi";


export default function Hero() {
  return (
    <div className='relative w-full h-screen mt-[-30px] z-[11]'>
        <div className='w-full h-full top-[50] relative'>
            <video autoPlay muted loop className='h-full w-full object-cover'>
                <source src={Vid} type='video/mp4'/>
            </video>
            <div className='absolute h-full w-full top-0 justify-center text-center flex flex-col items-center font-bold text-white text-2xl gap-6 '>
                <h1>"Explore. Discover. Wander. Your Journey Begins Here..."</h1>
                <div className='w-1/2 flex justify-center items-center'>
                  
                  <input className='w-full rounded-md py-2 px-2 text-black font-regular text-sm sm:text-lg' type='text' placeholder=' Enter City/destination...'/>
                  <div className=' px-1 py-1 rounded  z-1 bg-blue-800'>
                    <TfiSearch size={25} />
                  </div>
                </div>
                <button className='absolute bg-orange-700 text-base font-bold mt-60 py-1 px-4  rounded-md '>Get Started▶</button>
            </div>
        </div>
    </div>
  )
}
