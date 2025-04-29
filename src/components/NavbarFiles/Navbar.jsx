// // 

// import React from 'react'
// import LOGO from '../../assets/logo3.png'
// // import './navbar.css'
// import { Link } from 'react-router-dom'
// import { BsCart4 } from "react-icons/bs";
// import {useCart} from '../../components/context/CartContext'

// const Navbar = () => {

//   const {totalItems}=useCart()

//   return (
//     <div  style={navcomp}>
//         <nav className="className="navbar navbar-secondary-subtile bg-secondary-subtle fixed-top">
//   <div className="container-fluid">
//    <Link className='navbar-brand' to='/'>
//    <img style={{width:'70px',  height:'70px'}} src={LOGO} alt="logo" />
//    </Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
//       <div className="offcanvas-header">
//         <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Our Flower Shop</h5>
//         <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//       </div>
//       <div className="offcanvas-body">
//         <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
       
//           <li className="nav-item">
//            <Link to='/about'>About</Link>
//           </li>
//           <li className="nav-item">
//           <Link to='/contact'>Contact</Link>
//           </li>
//           <li className="nav-item">
//           <Link to='/service'>Service</Link>
//           </li>
//           <li className="nav-item">
//           <Link to='/signup'>Signup</Link>
//           </li>
//           <li className="nav-item">
//           <Link to='/cart'>
//           <BsCart4 className='cart'/>
//           <sup> <span className='cartnumber'>{totalItems}</span></sup>
//           </Link>
//           </li>
         
         
//         </ul>
//         <form className="d-flex mt-3" role="search" onSubmit={(e)=>{
//           e.preventDefault()
//           const value=e.target.elements.category.value

//           if(value){
//             window.location.href=`search?category=${value}`
//           }
//         }}>
//           <input className="form-control me-2" type="search" placeholder="Search category" aria-label="Search" name='category'/>
//           <button className="btn btn-success" type="submit">Search</button>
//         </form>
//       </div>
//     </div>
//   </div>
// </nav>
//     </div>
//   )
// }

// export default Navbar

import React,{useContext}from 'react'
import { Link } from 'react-router-dom'
import LOGO  from '../../assets/logo3.png'
import { MdOutlineShoppingCart } from "react-icons/md"
import { useCart } from '../context/CartContext'


const Navbar = () => {

    const {totalItems} = useCart()
    const navcomp={
        'marginBottom':'70PX'
    }
  return (
    <div style={navcomp}>
        <nav className="navbar navbar-secondary-subtile bg-secondary-subtle fixed-top">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src={LOGO} alt="Logo" style={{width:'70px',  height:'70px'}} />
                    <h2 className='d-none d-sm-inline-block text-dark ms-5 '>luxe'et flower</h2>
                </Link>
                <button className="navbar-toggler border-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-light fw-bold" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">luxe'et Flower</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" aria-current="page">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link">catalogue</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link">Contact</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/cart' className='nav-link'>
                                <MdOutlineShoppingCart className='cart'/>
                                <sup><span className='cartnumber'>{totalItems()}</span></sup>
                                </Link>
                            </li>
                        </ul>
                        
                        <form className="d-flex mt-3" role="search" onSubmit={(e)=>{
                            e.preventDefault()
                            const value=e.target.elements.category.value

                            if(value){
                                window.location.href=`search?category=${value}`
                            }
                        }}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name='category'/>
                            <button className="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    
  )
}

export default Navbar