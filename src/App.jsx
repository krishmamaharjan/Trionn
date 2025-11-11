import { useEffect, useRef } from "react"
import LandingPage from "./Pages/LandingPage"
import Test from "./Pages/test"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"


// gsap.registerPlugin(ScrollTrigger)
function App() {

// const scrollRef = useRef();

//  useEffect(() => {
//   gsap.fromTo(scrollRef.current,{
//     // x: 0
//     y: 200,
//   },{
//     y:400,
//     scrollTrigger:{
//       trigger: "#container",
//       start: "top top",
//       end: "+=100%",
//       markers: true,
//       scrub: true,
//       pin: true,


//     }
//   })
//  }, [])
  return (
    <>
    {/* <div className="h-screen bg-amber-300">

    </div>
    <div ref={scrollRef} id="container" className="mainred flex items-center justify-center h-screen ">
    <img src="https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg" alt="" className="size-50 image" />

    </div>
    <div className="h-screen bg-red-500">

    </div> */}

    <LandingPage />
    </>
  )
}

export default App
