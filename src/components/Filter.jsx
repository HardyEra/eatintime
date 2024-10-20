import React from 'react'
import { filterItems } from '../assets/asset'

function Filter() {
  return (
    <div className="w-full px-5 pt-8">
       <div className="">
        Arun What's on your mind!
       </div>
       <div className="w-full gap-1 flex py-4">
            
                {filterItems.map((item , index) => (
                    <div key={index} className="w-[15vw] h-[14vw] lg:w-[9vw] lg:h-[8vw]">
                        <div  className="w-full h-[80%] flex justify-center items-center">
                            <img className="w-[80%] h-full rounded-full object-cover" src={item.src} alt="" />
                        </div>
                        <a className="w-full h-[20%] pt-2 text-[2.5vw] sm:text-base lg:text-xl text-gray-600 leading-none flex justify-center items-center" href={item.href}>{item.label}</a>
                    </div>
                    
                        
                ))}
                
            
       </div>
    </div>
  )
}

export default Filter
