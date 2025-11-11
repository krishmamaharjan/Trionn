import React from 'react'
import { TiWeatherSunny } from "react-icons/ti";
import { FiBarChart2 } from "react-icons/fi";
import { MdOutlineSegment } from "react-icons/md";
export const Navbar = () => {
  return (
    <div className='text-white flex items-center justify-between px-14 pt-8'>
        <div className='text-2xl'>
            <h1>TRIONN</h1>
        </div>

        <div className='flex gap-2'>
            <TiWeatherSunny size={20}/>
            <FiBarChart2 size={20}/>
        </div>
        
        <div className='text-sm flex items-center gap-2'>
            MENU
            <MdOutlineSegment size={20} />
        </div>
    </div>
  )
}
