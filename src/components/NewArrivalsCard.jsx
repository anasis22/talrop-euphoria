import React from 'react'
import { useData } from '../../contexts/DataContexts'

const NewArrivalsCard = () => {
    const {data} = useData();
  return (
    <div className='flex items-center justify-center gap-24 mt-8
    xsm:flex-col xsm:gap-12
    sm:flex-row sm:flex-wrap
    md:flex-row md:flex-wrap
    lg:flex-row lg:flex-wrap'>
      {data.map((el) => {
        return (
            <div key={el.id} className='cursor-pointer'>
                <img src={el.img} alt={el.title} />
                <p className='text-t-color text-sm mt-4'>{el.title}</p>
            </div>
        )
      })}
    </div>
  )
}

export default NewArrivalsCard
