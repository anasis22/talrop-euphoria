import React from 'react'

const Cards = () => {
  return (
    <div className="w-[90%] flex items-center justify-around pt-16 pb-16
    xsm:flex-col
    sm:flex-col
    md:flex-row">
      <div className='w-[40%] h-[340px] rounded-md bg-card-1 bg-no-repeat bg-200 bg-25-top flex items-center justify-start cursor-pointer
      xsm:w-[90%] xsm:h-[270px]
      sm:w-[90%] sm:h-[300px]
      md:w-[45%] md:h-[320px]'>
        <div className='
        xsm:ml-8
        sm:ml-12
        md:ml-12'>
            <p className='text-white'>Low Prices</p>
            <h3 className='text-white font-bold mt-3
            xsm:text-2xl
            sm:text-3xl
            md:text-3xl'>High Coziness</h3>
            <p className='text-white mt-3'>UPTO 50% OFF</p>
            <p className='text-white mt-6 underline cursor-pointer'>Explore Items</p>
        </div>
      </div>
      <div className='w-[40%] h-[340px] rounded-md bg-card-2 bg-no-repeat bg-200 bg-25-top flex items-center justify-start cursor-pointer
      xsm:w-[90%] xsm:h-[270px] xsm:mt-6
      sm:w-[90%] sm:h-[300px] sm:mt-8
      md:w-[45%] md:h-[320px] md:mt-0'> 
        <div className='
        xsm:ml-8
        sm:ml-12
        md:ml-12'>
            <p className='text-white'>Beyoung Presents</p>
            <h3 className='text-white font-bold mt-3
            xsm:text-2xl
            sm:text-3xl
            md:text-3xl'>Breezy Summer <br />Style</h3>
            <p className='text-white mt-3'>UPTO 50% OFF</p>
            <p className='text-white mt-6 underline cursor-pointer'>Explore Items</p>
        </div>
      </div>
    </div>
  )
}

export default Cards
