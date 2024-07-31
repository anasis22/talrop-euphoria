import React from 'react'
import ScreenOne from '../screens/ScreenOne'
import ScreenTwo from '../screens/ScreenTwo'
import ScreenThree from '../screens/ScreenThree'
import ScreenFour from '../screens/ScreenFour'
import ScreenFive from '../screens/ScreenFive'
import ScreenSix from '../screens/ScreenSix'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <ScreenOne />
      <ScreenTwo />
      <ScreenThree />
      <ScreenFour/>
      <ScreenFive />
      <ScreenSix />
      <Footer />
    </div>
  )
}

export default Home
