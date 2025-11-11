import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger"


gsap.registerPlugin(ScrollTrigger)

const Scroll = () => {

    const vidRef = useRef(null);
    const containerRef = useRef(null);
//  useEffect(() => {
//   gsap.fromTo("#container",{
//     width: 100,
//     height: 100,
//     // borderRadius: 10,
    
//   },{
//     width: 1000,
//     height: 1000,
//     scrollTrigger:{
//         trigger: "#container",
//         start: "top top",
//         end: "+=100%",
//         // markers: true,
//         // scrub: true,
//         // pin: true,


//     }
//   })
//  }, [])

useEffect(() => {
    gsap.fromTo(vidRef.current, {
      
       
        borderRadius: "20px",
        scale: 1,

    },
    {
        scale: 5,
        borderRadius: "0px",
        scrollTrigger:{
            trigger: containerRef.current,
            start:"top top",
            end: "+=100%",
            markers: true,
            scrub: 1,
            pin: true,
        }
    }
)
}, []);
  return (
    <div className='min-h-screen ' id='container' ref={containerRef}>
        <div 
          className='flex  bg-amber-400 items-center justify-center overflow-hidden'
            style={{ width: "200px", height: "100px", borderRadius: "20px" }}
            ref={vidRef}
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

