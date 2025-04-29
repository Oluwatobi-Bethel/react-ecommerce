// import React from 'react'

// const Success = () => {
//   return (
//     <div>Success</div>
//   )
// }

// export default Success

import React, { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'

const Success = () => {
  // Local state to hold the order data
  const [order, setOrder] = useState(null)
  const { cartItems } = useCart() // (Optional if cart state needs to be shown)

  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0)

    // Retrieve order data from localStorage
    const data = localStorage.getItem('orderComplete')
    if (data) {
      setOrder(JSON.parse(data))
      localStorage.removeItem('orderComplete')
      localStorage.removeItem('shipping')
    }
  }, [])

  // Show loading while order is being retrieved
  if (!order) return <h3 className='text-center mt-5'>Loading your Order....</h3>

  return (
    <div className='container py-5'>
      <h2 className='mb-4 text-success text-center'>Payment Successful</h2>

      <h5>Shipping Details</h5>
      <ul>
        <li><strong>Address:</strong> {order.Shipping.address}</li>
        <li><strong>City:</strong> {order.Shipping.city}</li>
        <li><strong>Postal Code:</strong> {order.Shipping.postalCode}</li>
        <li><strong>Country:</strong> {order.Shipping.country}</li>
      </ul>

      <h5 className='mt-4'>Order Summary</h5>
      {order.cartItems.map(item => (
        <div key={item.id} className='border-bottom py-2'>
          <strong>{item.name}</strong> × {item.qty} — ${item.new_price.toFixed(2)} each
        </div>
      ))}
    </div>
  )
}

export default Success