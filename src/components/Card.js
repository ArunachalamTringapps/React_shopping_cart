import React,{useState,useEffect} from 'react'
import './styles/Card.css'

const Card = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      <div className="total">
        <h1>MY CARD</h1>
        <span>Total Price of your Cart <span>Rs - {price}</span></span>
        
      </div>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.thumb} alt="" />
            <p>{item.product_name}</p>
          </div>
          <div className='increase_decrease_btn'>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div className='remove_btn_div'>
            <span>{item.price}</span>
            <button className='remove_btn' onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}

    </article>
  );
};


export default Card