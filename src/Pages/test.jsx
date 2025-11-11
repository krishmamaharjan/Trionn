import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useLayoutEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)
export default function Test() {

  useLayoutEffect(()=>{
    gsap.fromTo()
  })

  return (
    <div className='text-white h-screen bg-white'>
      <img src="https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg" alt="er5t6y7u" />
    </div>
  )
}
