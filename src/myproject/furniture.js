import { useSelector } from "react-redux"
import Display from "./display"

export default function Furniture() {    
  const products = useSelector(data=>data.products)
  return(
    <div>

      {products.filter((product)=>{
        product.category == "furniture"
      }).map((product,i)=>{
        <Display product = {product} key = {i}/>
      })
    }
    </div>
  )
} 