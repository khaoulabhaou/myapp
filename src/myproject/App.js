import "bootstrap/dist/css/bootstrap.min.css"
import './style.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './home';
import Header from './header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notfound from './notfound';
import Groceries from './groceries';
import { useDispatch } from 'react-redux'; 
import Furniture from "./furniture";
import Fragrances from "./fragrances";
import Beauty from "./beauty";
export default function App() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {dispatch(setProducts(response.data.products))})
      .catch((error) => {
        console.error("Error: ", error)
      })
  }, [])
  return (
    <div>
      <BrowserRouter>
         <Header />
        <Routes>
          <Route index path = "/" element = {<Home products={products} />}/>
          <Route path = "*" element = {<Notfound />}/>
          <Route path = "/groceries" element = { <Groceries products = {products} />}/>
          <Route path = "/furniture" element = { <Furniture products = {products} /> }/>
          <Route path = "/fragrances" element = { <Fragrances products = {products} />}/>
          <Route path="/beauty" element={ <Beauty products={products} />}/>
        </Routes>
      </BrowserRouter> 
    </div>
  )
}