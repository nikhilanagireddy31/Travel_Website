import React from 'react'
import { FaRupeeSign } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { BiSolidCar } from "react-icons/bi";
import { GiMusicSpell } from "react-icons/gi";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { LiaFileInvoiceSolid } from "react-icons/lia";

export default function Plan() {
  return (
    <div className='overflow-hidden'>
        <div className='text-3xl font-bold ml-10 mt-8 mb-8 '>
        <h1>Plan your travelling...</h1>
        </div>
        <div className='grid grid-cols-3 grid-rows-none gap-4 px-5'>
            <div className='border-x-2 border-y-2 p-8 w-full bg-slate-200  rounded-lg shadow-xl col-span-3 sm:col-span-1'>
                <div className='flex text-xl font-semibold w-full bg-red-300 p-2'>
                <p className='text-3xl'><LiaFileInvoiceSolid /></p>
                <p>Plan your Trip</p>

                </div>
            <p>With its mesmerizing landscapes, rich culture, and thrilling adventures, Manali promises an unforgettable getaway for travelers seeking a blend of nature, adventure, and relaxation. Plan your trip wisely, immerse yourself in the local experiences, and create memories that will last a lifetime in this Himalayan paradise.
             And if you’re planning to head off the main routes, take backup directions. While GPS is great for directions, it may not always work in remote or offroad areas. Have an offline map or print map on-hand, just in case.</p>
            </div>

            <div  className='border-x-2 border-y-2 p-8 w-full bg-slate-200 rounded-lg shadow-xl col-span-3 sm:col-span-1'>
            <div className='flex text-xl font-semibold w-full bg-red-300 p-2'>
                <p className='text-2xl'><FaPersonWalkingLuggage /></p>
                <p>What to pack</p>
                </div>
            <p>Pack warm clothing layers, including thermals, fleece jackets, and waterproof outerwear. Don't forget sturdy hiking boots, hats, gloves, and scarves for outdoor activities.Pack any necessary medications and a basic first aid kit. Include a camera or smartphone for capturing stunning mountain views. Carry a portable charger for electronic devices, and consider bringing a reusable water bottle to stay hydrated. Lastly, pack a sense of adventure and open-mindedness for exploring Manali's scenic beauty and cultural delights.</p>
            </div>

            <div  className='border-x-2 border-y-2 p-8 w-full bg-slate-200 rounded-lg shadow-xl  col-span-3 sm:col-span-1'>
            <div className='flex text-xl font-semibold w-full bg-red-300 p-2'>
            <p className='text-2xl'><GiMusicSpell /></p>
            <p>Plot your playlist</p>
            </div>
            <p>Music enhances the journey to Manali by complementing its scenic beauty and creating a soothing atmosphere. It uplifts spirits during long travels and adds rhythm to the adventure. Music serves as a cultural bridge, connecting travelers to the local music traditions and community. It provides familiarity and comfort, especially for solo travelers, fostering a sense of home away from home. Overall, music enriches the travel experience, making the journey to Manali memorable and soul-stirring.</p>
            </div>

            <div  className='border-x-2 border-y-2 p-8 w-full bg-slate-200 rounded-lg shadow-xl col-span-3 sm:col-span-1'>
            <div className='flex text-xl font-semibold w-full bg-red-300 p-2'>
            <p className='text-2xl'><BiSolidCar /></p>
            <p>Driving with kids</p>
            </div>
            <p>As we journey through the picturesque landscapes of Manali with our kids, the scenic beauty unfolds before us like a vibrant painting come to life. Along the way, we stop to marvel at cascading waterfalls, lush forests, and snow-capped mountains, immersing ourselves in the natural wonders of the Himalayas. Our journey is filled with laughter, storytelling, and bonding moments as we create cherished memories amidst the breathtaking scenery of Manali.</p>
            </div>
            
            <div  className='border-x-2 border-y-2 p-8 w-full bg-slate-200 rounded-lg shadow-xl col-span-3 sm:col-span-1'>
            <div className='flex text-xl font-semibold w-full bg-red-300 p-2'>
            <p className='text-2xl'><FaRupeeSign/></p>
            <p>Carry cash</p>
            </div>
            <p>Carrying money during a trip to Manali ensures access to essential services like accommodation, food, and transportation. It provides financial security in case of emergencies or unforeseen expenses. Cash is often necessary for transactions in remote areas where card payments may not be accepted. Having money on hand enables travelers to fully enjoy local experiences and make the most of their journey in Manali..</p>
            </div>

            <div  className='border-x-2 border-y-2 p-8 w-full bg-slate-200 rounded-lg shadow-xl col-span-3 sm:col-span-1'>
            <div className='flex  text-xl font-semibold w-full bg-red-300 p-2'>
            <p className='text-2xl'><BiPhoneCall /></p>
            <p>Essential numbers</p></div>
            <p><span className='text-lg font-medium'>Police</span>: 100 <br/>
            <span className='text-lg font-medium'>Ambulance</span> :108 <br/>
            <span className='text-lg font-medium'>Vehicle Breakdown Services</span>: +91 XXXXXXXXXX <br/>
            <span className='text-lg font-medium'>Himachal Pradesh Tourism Department</span>: +91 XXXXXXXXXX <br/>
            </p>
            </div>

        </div>
    </div>
  )
}
