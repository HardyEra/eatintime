import React from 'react'
import { RestroDetails } from '../assets/asset'

function Restaurants() {
  return (
    <div className="w-full p-2 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center align-items-center">
        {RestroDetails.map((item,index)=>(

            <div key={index} className="w-[90vw] min-h-[30vw] md:w-[30vw] md:h-[10vw]">
                <div className="relative w-full h-[50vw] md:h-[20vw] rounded-lg overflow-hidden">
                    <img className="w-full md:h-[20vw] object-cover md:object-fill" src={item.src} alt="" />
                    <h2 className="absolute bg-blue-500 bottom-2 rounded-md text-sm p-1 text-white">{item.discount}</h2>
                </div>
                
                <div className="w-full flex justify-between pt-2">
                    <h1 className="font-bold text-[5vw] md:text-lg">{item.label}</h1>
                    <div className="h-5 p-1 flex justify-center items-center rounded-[1vw] bg-green-700 text-white font-semibold text-sm">{item.rating}★</div>
                </div>
                <div className="w-full flex justify-between">
                    <h1 className="text-sm text-gray-500 tracking-tight">{item.tags}</h1>
                    <h1 className="text-sm text-gray-500">{item.price}</h1>
                </div>
               
            </div>
        ))}
        
    </div>
  )
}

export default Restaurants
