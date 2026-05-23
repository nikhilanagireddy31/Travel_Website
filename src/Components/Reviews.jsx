import React from 'react'
import pic3 from '../assets/routee.jpg'
export default function Reviews() {
  return (
    <div className='bg-slate-200 w-cover overflow-hidden py-5 mt-2'>
        <div className='flex flex-col sm:flex-row  gap-4 px-5'>
            <div className='order-1'>
                <h1 className='text-3xl mb-5 text-center'>Enjoy the ride</h1>
                <p>Being on the road is an adventure in itself. Make the most of the journey: stop for photo ops, swing through small villages or stop to enjoy the mountains. There’s so much to see and explore, and road trips give you the flexibility to do so. Equally, be respectful when passing through. Show courtesy to other road users, don’t litter and be mindful of local culture and communities.</p>
            </div>
            <div className='order-2'><img className='rounded-lg shadow-lg' src={pic3}/></div>
        </div>
    </div>
  )
}
