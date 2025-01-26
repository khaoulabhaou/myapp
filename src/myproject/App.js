import "bootstrap/dist/css/bootstrap.min.css"
import './style.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './home';
import Header from './header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notfound from './notfound';
import Food from './food';

export default function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => setProducts(response.data.products))
      .catch((error) => {
        console.error("Error: ", error)
      })
  }, [])
  return (
    <div>
      <BrowserRouter>
         <Header />
        <Routes>
          <Route index path="/" element={<Home products={products}/>}/>
          <Route path="*" element={<Notfound />}/>
          <Route path="/food" element={<Food products={products}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}