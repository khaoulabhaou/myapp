import './style.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Home';

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
      <Home products={products} />
    </div>
  )

}