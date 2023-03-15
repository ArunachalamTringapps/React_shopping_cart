import React from 'react'
import './styles/Home.css'
import product_card from '.././data'

function Home({handleClick}) {
  // console.log(product_card)
  const arun=product_card.map((items)=>
  <div className="card" key={items.id}>
  <div className="card_img">
      <img src={items.thumb} alt='' />
  </div>
  <div className="card_header">
      <h2>{items.product_name}</h2>
      <p>{items.description}</p>
      <p className="price">{items.price}<span>{items.currency}</span></p>
      <button onClick={() => handleClick(items)}>Add to cart</button>
  </div>
</div>
  );
  return (
    <div className='home'>{arun}</div>
  )
}

export default Home