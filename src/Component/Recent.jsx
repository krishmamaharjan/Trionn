import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger"

const Recent = () => {



  return (
    <div className='min-h-screen text-white pl-14' >
       <div className='text-9xl'>
        <h1>RECENT</h1>
        <h1>WORK</h1>
       </div>

       <div className='text-2xl font-semi-bold pt-4 flex justify-between items-center'>
        <div>
          <p className='w-80'>
            In the creative wilderness, clients find our work truly beloved.
          </p>
        </div>

        <div className='text-button-border text-lg flex items-center justify-between p-14'>
            <button className='border-2 rounded-full px-8 py-2 border-button-border'>Explore work</button>
        </div>

       </div>
    </div>
  )
}

export default Recent

