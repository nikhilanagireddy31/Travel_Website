import React from 'react';
import LadakhImage from '../assets/ladakh.jpg';
import route from '../assets/route.jpg'
import img1 from '../assets/Manali.jpg'
import i1 from '../assets/map.jpg'
import i2 from '../assets/mapp.jpg'

export default function Cards() {
  return (
    <div className='w-full h-full bg-fuchsia-300 py-5'>
      <div className='flex flex-col bg-slate-100 gap-5 '>
        <div className='sm:flex-row flex flex-col justify-center items-center gap-5'>
        <div className='w-full sm:w-1/2  px-5'>
          <img className='w-full h-[300px] object-cover rounded-lg' src={LadakhImage} />
         
        </div>
        <div className='sm:w-1/2 w-full px-5 h-full'>
          <h1 className='text-2xl text-center'>Map Your Route...</h1>
          <p className='sm:text-lg text-md'>Embark on a mesmerizing journey through the enchanting routes of Manali and discover the unparalleled beauty, adventure, and cultural richness that await you in this Himalayan paradise. Whether you're seeking adrenaline-pumping thrills, spiritual enlightenment, or simply a peaceful retreat amidst nature, Manali offers an unforgettable experience that will leave you captivated and rejuvenated. So pack your bags, hit the road, and let the magic of Manali unfold before you!</p>
        </div>
        </div>
        <div className='flex sm:flex-row flex-col justify-center items-center gap-5'>
          <div className='sm:order-1 order-2 w-full sm:w-1/2'>
            <h1 className='text-2xl text-center'>Rent your wheels.</h1>
            <p className='sm:text-lg text-md px-6'>Experience the thrill of exploration and the joy of discovery as you embark on a biking adventure through the breathtaking landscapes of Manali. With rental bikes as your trusted companions, the possibilities are endless – from exhilarating mountain trails to serene countryside roads, every twist and turn reveals a new adventure waiting to be explored. So gear up, saddle up, and let the journey begin!</p>
          </div>              
          <div className='order-1 sm:order-2 px-5 py-5 '>
            <img className='w-full h-[57vh] sm:w[300px] object-cover rounded-lg' src={route} />
          </div>
        </div>
      </div>
    </div>
  );
}
