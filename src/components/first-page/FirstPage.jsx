import React from 'react'
import Navbar from '../Navbar'
import Banner from '../Banner'
import Menu from '../Menu'
import { useData } from '../../../contexts/DataContexts'

const FirstPage = () => {
  const {menuOpen,openingAndCloseMenu} = useData();
  return (
    <div 
    className='w-screen relative flex items-center justify-start flex-col'>
    <Navbar />   
    <Banner />
    <Menu />
    </div>
  )
}

export default FirstPage
