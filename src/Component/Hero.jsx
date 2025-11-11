import { FaRegArrowAltCircleDown } from "react-icons/fa";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Buttons from "./Buttons";
import useCursorBall from "./Cursor";

const Hero = () => {

    useCursorBall();

    const textRef = useRef([]);
    const paraRef = useRef(null);
    const arrowRef = useRef(null);
    const buttonRef = useRef(null);


    useEffect(() => {
    

    const tl = gsap.timeline({defaults: {ease: "power1.out"}});

    tl.fromTo(textRef.current[0], {
        y: 140,
        opacity: 0,
        rotation:2,

    },
    {
        y: 0, 
        opacity:1, 
        rotation: 0, 
        duration:1.2,
        transformOrigin: "center bottom", 
    });


    tl.fromTo(textRef.current[1],{
        y:140,
        opacity: 0,
        rotation: 4,

    },
    {
        y:0, 
        opacity:1,
        rotation:0,
        duration:1.2, 
        transformOrigin:"center bottom"
    },"-=1.1");

    tl.fromTo(paraRef.current, {
        y: 120,
        rotation: 6,
        opacity: 0,
    },
    {
        y:0, 
        opacity:1,
        rotation:0,
        duration:1.2, 
        transformOrigin:"center bottom"
    }, "-=0.8");

    tl.fromTo(arrowRef.current,{ 
        y: 100, 
        opacity: 0, 
        rotation: 5 
    },
    { 
        y: 0, 
        opacity: 1, 
        rotation: 0,
        duration:1, 
        transformOrigin: "center bottom" 
    }, "-=1.1");


    tl.fromTo(buttonRef.current.querySelectorAll("button"),
    {
        y:40, opacity:0
    },
    {
        y:0,
        opacity: 1,
        duration: 1,
        stagger: 0.3
    }, "-=0.8");


    }, []);


    

  return (
    <div className="overflow-hidden relative">
        <div className='text-white flex flex-col items-center text-center pt-34'>
            <div className='text-6xl font-bold flex flex-col items-center justify-center'>

                <h1 ref={(el) => (textRef.current[0] = el)}>ROAR IN THE DIGITAL</h1>
                <h1 ref={(el) => (textRef.current[1] = el)}>WILDERNESS.</h1>
                
            </div>

            <div ref={paraRef} className='w-90 text-center mt-4'>
                <p className='text-sm'>WE ROAR WITH SUCCESS, DELIVERING THE TRIONN
                    THROUGH VERSATILE DESIGN, BRANDING AND THE LATEST TECH DEVELOPMENT TO COMPANIES.
                </p>
            </div>

            <div ref={arrowRef} className="mt-4">
                <FaRegArrowAltCircleDown  size={24}/>
            </div>
            
        </div>

        <div ref={buttonRef}>
            <Buttons />
        </div>
        
        <div className="cursor-ball"></div>
    </div>
  )
}

export default Hero