import React from 'react'
import nike from "/assets/images/nike.jpg"
import HandM from "/assets/images/handm.jpg"
import levis from "/assets/images/levis.jpg"
import uspa from "/assets/images/uspa.jpg"
import puma from "/assets/images/puma.jpg"

const TopBrands = () => {
  return (
    <div className='bg-[#3C4242] w-[90%] flex flex-col items-center justify-center gap-8 p-11 rounded-lg mt-12'>
      <h1 className='text-4xl font-extrabold text-white'>Top Brands Deals</h1>
      <p className='text-white font-extralight'>Up To <span className='text-[#FBD103]'>60%</span> off on brands</p>
      <ul className='w-[80%] flex items-center justify-center gap-4'>
        <li className=''>
            <img className='rounded-lg' src={nike} alt="nike" />
        </li>
        <li className=''>
            <img className='rounded-lg' src={HandM} alt="h&m" />
        </li>
        <li className=''>
            <img className='rounded-lg' src={levis} alt="levis" />
        </li>
        <li className=''>
            <img className='rounded-lg' src={uspa} alt="uspa" />
        </li>
        <li className=''>
            <img className='rounded-lg' src={puma} alt="puma" />
        </li>
       
      </ul>
    </div>
  )
}

export default TopBrands
