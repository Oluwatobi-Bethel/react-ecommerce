import React, { useEffect } from 'react'
import './Hero.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import FLOWER from'../../assets/purepng1.png'

const Hero = () => {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:false,
      easing:'ease-in-out'
  });
},[])


  return (
    <div className='hero'>
        <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h1 data-aos="fade-right">Flower Bay</h1>
            <p data-aos='fade' data-aos-delay="300">Lovely flowers at your disposal</p>
            <button className="btn btn-primary" data-aos="fade-up" data-aos-delay="600">shop now</button>
        </div>


        <div className="col-md-5" data-aos="fade-left" data-aos-delay="400">
            <img src={FLOWER} alt=""/>
        </div>
        </div>
    </div>
    </div>
    
  )
}

export default Hero