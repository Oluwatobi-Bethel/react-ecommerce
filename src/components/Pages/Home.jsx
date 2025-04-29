import React from 'react'

import Hero from '../Herosection/Hero'
import Latestcollection from '../latestcollection/Latestcollection'
import Bestseller from '../bestseller/Bestseller'

// import Hero from '../Hero/Herosection'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Latestcollection />
        <Bestseller />
      
        
        
    </div>
  )
}

export default Home