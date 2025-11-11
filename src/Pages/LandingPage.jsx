import React from 'react'
import { Navbar } from '../Component/Navbar'
import Hero from '../Component/Hero'
import Buttons from '../Component/Buttons'
import Scroll from '../Component/Scroll'

import Recent from '../Component/Recent'
import LoftRoom from '../Component/LoftRoom'
import IMusic from '../Component/IMusic'

const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Scroll />
        <Recent />
        <LoftRoom />
        <IMusic />


        
    </div>
  )
}

export default LandingPage