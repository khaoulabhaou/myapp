import { useSelector } from "react-redux"
import Display from "./display"

export default function Food() {    
  const products = useSelector(data=>data.products)
  return(
    <div>

      {products.filter((product)=>{
        product.category == "food"
      }).map((product,i)=>{
        <Display product = {product} key = {i}/>
      })
    }
    </div>
  )
} 