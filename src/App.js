import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Card from './components/Card'
import { useState } from 'react';
import {Routes,Route} from "react-router-dom"
import Pricemore from './components/Pricemore';
import Priceless from './components/Priceless';


function App() {
  const [cart, setCart] = useState([]);
  const handleClick = (item) => {
  console.log(cart.indexOf(item));
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };


  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };


  return (
    <div className="App">
      <Header size={cart.length} />
      <Routes>
        <Route path='/' element={<Home  cart={cart} handleRemove={handleRemove}  handleClick={handleClick}  />} />
        <Route path='/card' element={<Card  cart={cart} handleChange={handleChange} handleRemove={handleRemove} />} />
        <Route path='/greater-than-500' element={<Pricemore cart={cart} handleRemove={handleRemove} handleClick={handleClick}  />} />
        <Route path='/less-than-500' element={<Priceless cart={cart} handleRemove={handleRemove} handleClick={handleClick}  />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
