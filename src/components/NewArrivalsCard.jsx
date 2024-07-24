import React from 'react'
import { useData } from '../../contexts/DataContexts'
import { useNavigate } from 'react-router-dom';

const NewArrivalsCard = () => {
    const {data , setSelectedProducts} = useData();
    const navigate = useNavigate()

    const handleImageClick = (product) => {
      setSelectedProducts(product)
      navigate('/product-details-page')
    }
  return (
    <div className='flex items-center justify-center gap-24 mt-8
    xsm:flex-col xsm:gap-12
    sm:flex-row sm:flex-wrap
    md:flex-row md:flex-wrap
    lg:flex-row lg:flex-wrap'>
      {data.map((el) => {
        return (
            <div key={el.id} className='cursor-pointer'>
                <img src={el.img} alt={el.title} onClick={() => handleImageClick(el)} />
                <p className='text-t-color text-sm mt-4'>{el.title}</p>
            </div>
        )
      })}
    </div>
  )
}

export default NewArrivalsCard
