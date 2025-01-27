import Display from "./display"

export default function Furniture(props) {    
  return(
    <div>
    {
      props.products.filter((product)=>{
        return product.category === "furniture"
        }).map((product,i)=>{
        return (
          <Display product = {product} key = {i}/>
        )
      })
    }
    </div>
  )
} 