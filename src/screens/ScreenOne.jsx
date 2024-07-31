import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Menu from '../components/Menu'
import { useData } from '../../contexts/DataContexts'

const ScreenOne = () => {
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

export default ScreenOne
