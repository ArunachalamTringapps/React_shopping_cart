import React from 'react'
import './styles/Home.css'
import product_card from '.././data'

function Home({cart,handleRemove,handleClick}) {

  const arun=product_card.map((items)=>
  <div className="card" key={items.id}>
  <div className="card_img">
      <img src={items.headphone_img} alt='' />
  </div>
  <div className="card_header">
      <h2>{items.product_name}</h2>
      <p>{items.description}</p>
      <p className="price">{items.price}<span>{items.currency}</span></p>
      {cart.find((add_or_remove)=>{ return add_or_remove.id===items.id})?<button onClick={() => {handleRemove(items.id)}} >Remove</button>:<button onClick={() => {handleClick(items)}} >Add to cart</button>      


     
}

  </div>
</div>
  );
  return (
    <div className='home'>{arun}</div>
  )
}

export default Home