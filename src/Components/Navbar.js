import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillBagFill } from "react-icons/bs";
import {useSelector} from 'react-redux'


const Navbar = () => {
   
 const {totalQuantities}   = useSelector(state => state.cartReducer)

  return (
    <div> <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
       <Link to='/'> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToDB59-7UO2mt4CYMRLUuJUmiF1ksezpItaA&usqp=CAU" width="50px" className='imgh' alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
        <div className='d-flex justify-content-around'>
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">

      <div className="navbar-nav ">
      <Link to="/" className='h'>Home</Link>

        {/* <a className="nav-link" href="#">Features</a> */}
        <Link to="/products" className='h'>Products</Link>
        {/* <a className="nav-link" href="#">Pricing</a> */}
        <div className='cart'>
        {/* <span class='cart-badge' id="targetEl" value="0">0</span> */}
        <Link to='/cart'  >  <BsFillBagFill/>   </Link><span class='cart-badge' id="targetEl" value="0">{totalQuantities}</span> 
        </div>
      </div>
        </div>
    </div>
  </div>
</nav>

   </></div>
  )
}
// className='additem px-3 py-1'
export default Navbar 