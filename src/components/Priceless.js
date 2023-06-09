import React from 'react'
import './styles/Home.css'
import product_card from '.././data'

function pricelss({cart,handleRemove,handleClick}) {

  const arun= product_card.filter(name => name.price<=500).map(filteredName => (
    <div className="card" key={filteredName.id}>
    <div className="card_img">
        <img src={filteredName.headphone_img} alt='' />
    </div>
    <div className="card_header">
        <h2>{filteredName.product_name}</h2>
        <p>{filteredName.description}</p>
        <p className="price">{filteredName.price}<span>{filteredName.currency}</span></p>
        {/* <div className="btn">Add to cart</div> */}
        {cart.find((add_or_remove)=>{ return add_or_remove.id===filteredName.id})?<button onClick={() => {handleRemove(filteredName.id)}} >Remove</button>:<button onClick={() => {handleClick(filteredName)}} >Add to cart</button>   }   
    </div>
  </div>  ));
  return (
    <div className='home'>{arun}</div>
  )
}

export default pricelss