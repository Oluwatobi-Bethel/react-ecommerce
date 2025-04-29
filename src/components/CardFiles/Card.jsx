// import React from 'react'
// import './Card.css'

// const Card = (props) => {
//   return (
    
//          <div className="card">
//                 <img src={props.image} alt=""/>
//                 <h4>{props.name}</h4>
//                 <p>&#8358; {props.price}</p>
//                 <button>Order here</button>
//             </div>
    
//   )
// }

// export default Card
import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'


// This is a reuseable card for all components
const Card = ({id,name,img,new_price,old_price}) => {

  return (
    <div className=' container item '>
        <img src={img} alt={name} />
        <p>{name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                ${new_price}
            </div>
            <div className="item-price-old">
                ${old_price}
            </div>
        </div>
       <Link to={`/product/${id}`}>
       <button className='btn btn-sm btn-outline-primary mt-3 me-3'>View Details</button>
        <button className='btn btn-sm btn-outline-primary mt-3'>Add to cart</button>
        </Link>

    </div>
  )
}

export default Card