import React from 'react'
import Card from '../CardFiles/Card'
import latest_colections from "../../assets/new_collection"
import './latestcollection.css'


const Latestcollection = () => {
    
    return(
        <div>
          
            <div className='new_collections'>
            <h1>Latest collections👋</h1>
            <p>Explore our latest collections across variety of items</p>
            <hr />
            <div className='collections'>
            {latest_colections.map((card, i)=>{
                      return<Card key={i} id={card.id} name={card.name} img={card.img} new_price={card.new_price} old_price={card.old_price}/>
                })}
    
            </div>
    
        </div>
        </div>
      )
}

export default Latestcollection