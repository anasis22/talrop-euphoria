import React from 'react'
import NewArrivalsCard from './NewArrivalsCard'

const NewArrivals = () => {
  return (
    <div className=' w-[90%]'>
        <div className='flex'>
            <span className='bg-base-color text-base-color rounded-md'>1</span>
            <h2 className='ml-4 text-t-color text-3xl font-semibold'>New Arrivals</h2>
        </div>
      <NewArrivalsCard />
    </div>
  )
}

export default NewArrivals
