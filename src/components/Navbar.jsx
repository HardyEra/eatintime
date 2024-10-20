import React from 'react'

function Navbar() {
  return (
    <div className="w-full flex justify-between gap-10 p-3 border-b-2">
        <div className="">
            LOGO
        </div>

    <div className="flex w-[45vw] items-center">

      <div class="relative">
        <select class="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
          <option className=""><h1 className="text-[1vw]">Deliver</h1></option>
          <option>Takeaway</option>
        </select>
      </div>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search" type="text" placeholder="Search"/>
    </div>


        <div className="w-[20vw] flex gap-5 lg:gap-20">
            <div className="w-[6vw] h-[6vw] lg:h-[2vw] lg:w-[2vw] overflow-hidden flex justify-center items-center">
            <a href="#">
            <img className="h-full w-full " src="https://i.pinimg.com/736x/51/5f/c5/515fc584baa97d0aae930bc6161a864f.jpg" alt="" />

            </a>
            </div>
            <div className="w-[6vw] h-[6vw] lg:h-[2vw] lg:w-[2vw] overflow-hidden flex justify-center items-center">
            <a href="#">
            <img className="h-full w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfwfzTPVw45cJcHNUp3sWUWLOkYAfQlAEBOQ&s" alt="" />

            </a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
