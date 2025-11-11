import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger"


gsap.registerPlugin(ScrollTrigger)

const Scroll = () => {



  return (
    <div className='min-h-screen flex items-center justify-center' id='container' >
        <div 
          className='flex items-center justify-center overflow-hidden'
            style={{ width: "400px", height: "300px", borderRadius: "20px" }}
            
        >
             <video   className='w-full h-full object-cover' controls >
            <source  src="/intro-video.mp4" type="video/mp4"/>
            </video>
        </div>

        {/* <div className='h-screen bg-red-500'>

        </div> */}
    </div>
  )
}

export default Scroll

