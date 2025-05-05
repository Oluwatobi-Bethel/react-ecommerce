import React, { useEffect } from 'react'
import './Hero.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import FLOWER from'../../assets/samsungs24ultra.jpeg'

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
            <h1 data-aos="fade-right">Your products hub</h1>
            <p data-aos='fade' data-aos-delay="300">Lovely products at your disposal</p>
            <button className="btn btn-primary" data-aos="fade-up" data-aos-delay="600">Shop now</button>
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