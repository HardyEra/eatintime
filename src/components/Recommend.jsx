import React from 'react'
import { RestroNames } from '../assets/asset'

function Recommend() {
  return (
    <div className="w-full p-2">
        <h1 className="font-bold px-2">Arun's Favourite Picks!</h1>
        <div className="w-full px-3 py-2 gap-[2vw] flex overflow-x-scroll lg:overflow-x-hidden hide-scrollbar">
            {RestroNames.map((item,index)=>(
                <div key={index} className="w-20 h-24 flex-shrink-0">
                    <img className="w-full h-[80%] rounded-full" src={item.src} alt="" />
                    <h1 className="w-full flex justify-center items-center text-[3vw] sm:text-base lg:text-md lg:font-light h-[20%]">{item.label}</h1>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Recommend
