import React from 'react'
import Nike from "/assets/images/nike.jpg"
import HandM from "/assets/images/handm.jpg"
import Levis from "/assets/images/levis.jpg"
import USPA from "/assets/images/USPA.jpg"
import Puma from "/assets/images/puma.jpg"

const TopBrands = () => {
  return (
    <div className='bg-[#3C4242] w-[90%] flex flex-col items-center justify-center gap-8 rounded-lg mt-12
    xsm:p-6
    md:p-11'>
      <h1 className='text-4xl font-extrabold text-white
      xsm:text-2xl
      md:text-4xl'>Top Brands Deals</h1>
      <p className='text-white font-extralight
      xsm:text-sm
      md:text-lg'>Up To <span className='text-[#FBD103]'>60%</span> off on brands</p>
      <ul className='w-[80%] flex items-center justify-center
      xsm:gap-2 xsm:w-[95%]
      md:gap-4 md:w-[80%]'>
        <li className=''>
            <img className='
            xsm:rounded-sm
            md:rounded-lg' src={Nike} alt="nike" />
        </li>
        <li className=''>
            <img className='
             xsm:rounded-sm
             md:rounded-lg' src={HandM} alt="h&m" />
        </li>
        <li className=''>
            <img className='
             xsm:rounded-sm
             md:rounded-lg' src={Levis} alt="levis" />
        </li>
        <li className=''>
            <img className='
             xsm:rounded-sm
             md:rounded-lg' src={USPA} alt="uspa" />
        </li>
        <li className=''>
            <img className='
             xsm:rounded-sm
             md:rounded-lg' src={Puma} alt="puma" />
        </li>
       
      </ul>
    </div>
  )
}

export default TopBrands
