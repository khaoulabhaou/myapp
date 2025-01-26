import { useSelector } from "react-redux"
import Display from "./display"

export default function Fragrances() {    
  const products = useSelector(data=>data.products)
  return(
    <div>

      {products.filter((product)=>{
        product.category == "fragrances"
      }).map((product,i)=>{
        <Display product = {product} key = {i}/>
      })
    }
    </div>
  )
} 