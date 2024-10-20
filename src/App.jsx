import { useState } from 'react'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Bar from './components/Bar'
import Recommend from './components/Recommend'
import Restaurants from './components/Restaurants'
import Partner from './components/Partner'


function App() {


  return (
    <div className="w-full h-screen">
      <Navbar/>
      <Partner/>
      <Filter/>
      <Bar/>
      <Recommend/>
      <Restaurants/>

        
    </div>
  )
}

export default App
