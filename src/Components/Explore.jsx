import React from 'react'
import img1 from '../assets/Agra.jpg'
import img2 from '../assets/Hyderabad.jpg'
import img3 from '../assets/leh2.jpg'
import img4 from '../assets/kerala2.jpg'
import img5 from '../assets/Darjeeling2.jpg'
import img6 from '../assets/Thar.jpg'
import img7 from '../assets/ooty.jpg'
import img8 from '../assets/kedharnath2.jpg'

export default function Explore() {
  return (
    <div className='overflow-hidden w-full'>
        <div className='text-3xl font-bold text-center'>
        <h1>keep exploring..</h1>
        </div>
        <div>
            <div className='w-full grid grid-cols-8 grid-rows-none mt-10 gap-3 rounded-none border-3'>
            <div className='w-full shadow-xl md:col-span-2 col-span-8 row-span-1'>
                <div className='flex flex-col justify-center items-center'>
                    <img className='w-full h-full object-cover  rounded-xl' src={img1}/>
                    <p className='row-span-1 text-lg font-semibold border-b-2 border-zinc-600 pb-3'>Taj Mahal   -Agra</p>
                    <p className='row-span-1 text-md font-semibold pt-1'>know more ▷</p>
                </div>
            </div>
            <div className='w-full shadow-xl md:col-span-2 col-span-8 row-span-1'>
                <div className="flex flex-col justify-center items-center">
                    <img className='w-full h-full object-cover rounded-xl' src={img3}/>
                    <p className='row-span-1 text-lg font-semibold border-b-2 border-zinc-600 pb-3 '>Leh  -Ladakh</p>
                    <p className='row-span-1 text-md font-semibold '>know more ▷</p>
                </div>
            </div>
           <div className='w-full shadow-xl md:col-span-2 col-span-8 row-span-1'>
                <div className="flex flex-col justify-center items-center">
                    <img className='w-full h-full object-cover rounded-xl' src={img2}/>
                    <p className='row-span-1 text-lg font-semibold border-b-2 border-zinc-600 pb-3 '>Charminar   -Hyderabad</p>
                    <p className='row-span-1 text-md font-semibold '>know more ▷</p>
                </div>
            </div>
            <div className='w-full shadow-xl md:col-span-2 col-span-8 row-span-1'>
                <div className="flex flex-col justify-center items-center">
                    <img className='w-full h-full object-cover rounded-xl' src={img4}/>
                    <p className='row-span-1 text-lg font-semibold border-b-2 border-zinc-600 pb-3 '>Munnar   -Kerala</p>
                    <p className='row-span-1 text-md font-semibold '>know more ▷</p>
                </div>
            </div>
            <div className='w-full shadow-xl md:col-span-2 col-span-8 row-span-1'>
                <div className="flex flex-col justify-center items-center">
                    <img className='w-full h-full object-cover rounded-xl' src={img6}/>
                    <p className='row-span-1 text-lg font-semibold border-b-2 border-zinc-600 pb-3 '>Thar Desert  -Rajasthan</p>
                    <p className='text-md font-semibold '>know more ▷</p>
                </div>
            </div>
            <div className='w-full shadow-xl md:col-span-2 col-span-8 row-span-1'>

                <div className="flex flex-col justify-center items-center">
                    <img className='w-full h-full object-cover rounded-xl' src={img5}/>
                    <p className='row-span-1 text-lg font-semibold border-b-2 border-zinc-600 pb-3 '>Darjeeling   -West Bengal</p>
                    <p className='text-md font-semibold '>know more ▷</p>
                </div>
            </div>
            <div className='w-full shadow-xl md:col-span-2 col-span-8 row-span-1'>

                 <div className="flex flex-col justify-center items-center">   
                    <img className='w-full h-full object-cover rounded-xl' src={img7}/>
                    <p className='row-span-1 text-lg font-semibold border-b-2 border-zinc-600 pb-3 '>Ooty  -Tamil Nadu</p>
                    <p className=' text-md font-semibold '>know more ▷</p>
                </div>
            </div>
            <div className='w-full shadow-xl md:col-span-2 col-span-8 row-span-1'>
                <div className="flex flex-col justify-center items-center">
                    <img className='w-full h-full object-cover rounded-xl' src={img8}/>
                    <p className='row-span-1 text-lg font-semibold border-b-2 border-zinc-600 pb-3 '>Kedharnath  -Uttharakhand</p>
                    <p className='text-md font-semibold'>know more ▷</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
