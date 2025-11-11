import React, { useEffect } from 'react'
import gsap from 'gsap';

const useCursorBall = () => {
    useEffect(() => {
        let posX = 0, posY = 0;
        let mouseX = 0, mouseY = 0;

        gsap.to(".cursor-ball", {
            duration:0.018,
             repeat: -1, 
             ease: "power3",
             onRepeat: function () {
                posX += (mouseX - posX) / 8;
                posY += (mouseY - posY) / 8;

                gsap.set(".cursor-ball", {
                    css: {
                        left: posX - 1,
                        top: posY - 2
                    }
                });
             }
        });


        document.addEventListener("mousemove", (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            console.log(e.clientX, e.clientY);
        });
       
    }, [])
  return (
    <div>Cursor</div>
  )
}

export default useCursorBall;