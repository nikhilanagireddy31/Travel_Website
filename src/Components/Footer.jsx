import React from 'react'
import { LuPhoneCall } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import i1 from '../assets/Agra.jpg'
import i2 from '../assets/Goa.jpg'
import i3 from '../assets/leh1.jpg'
import i4 from '../assets/enjoyy.jpg'



export default function Footer() {
  return (
    <div className='w-full '>
        <div className='grid grid-cols-3 grid-rows-none mt-6 gap-8 bg-slate-200 p-4'>
            <div className='md:col-span-1 col-span-3 row-span-2'>
            <p className='ml-10'>At GoMike..., we're driven by a passion for exploring the world and connecting travelers with unforgettable experiences, ensuring every journey is a seamless and enriching adventure.</p>
            </div>
            <div className=' flex flex-col gap-[2.5px] md:col-span-1 col-span-3 sm:ml-20 ml-9'>
                <p>Contact Us</p>
                <div className='flex'>
                <LuPhoneCall />
                <p>123456789</p>
                </div>
                <div className='flex'>
                <IoLocationOutline />
                <p>Some where on the Earth</p>
                </div>
                <div className='flex'>
                <CiClock2 />
                <p>Mon-Sat 9:00-5:00</p>
                </div>
                <div className='flex text-3xl gap-2'>
                <div><FaTwitterSquare /></div>
                <div><FaFacebookSquare /></div>
                <div><FaGooglePlusG /></div>
                <div><AiOutlineInstagram /></div>
                </div>
            </div>
            <div className='md:col-span-1 col-span-3 ml-9 sm:ml-20'>
                <p className=''>Recent Trips</p>
                <div className='grid grid-cols-2 grid-rows-none h-[200px] w-[200px] gap-1'>
                        <img className='w-full h-[15vh] object-cover col-span-1' src={i1}/>
                        <img className='w-full h-[15vh] object-cover col-span-1' src={i2}/>
                        <img className='w-full h-[15vh] object-cover col-span-1' src={i3}/>
                        <img className='w-full h-[15vh] object-cover col-span-1' src={i4}/>
                </div>
            </div>
        </div>
    </div>
  )
}
