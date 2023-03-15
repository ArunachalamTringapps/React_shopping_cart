import React from 'react'
import './styles/Header.css'
import { Link } from 'react-router-dom';
import { BsFillCartPlusFill } from "react-icons/bs";

function Header({ size }) {

  return (<header>
    <h1><span>Arun</span>Shop</h1>
    
    <div className='homeword'>
      <Link to='/'>Home</Link>
      <Link to='/greater-than-500'>More than 500₹</Link>
      <Link to='/less-than-500'>Less than 500₹</Link>
      </div>
    <Link to="/card">
    <BsFillCartPlusFill className='addtocardbtn' >
    </BsFillCartPlusFill><span className='number_count'>{size}</span>
    </Link>
  </header>
  )
}

export default Header