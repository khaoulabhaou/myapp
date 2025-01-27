import Display from "./display"

export default function Fragrances(props) {    
  return(
    <div>
    {
      props.products.filter((product)=>{
        return product.category === "fragrances"
      }).map((product,i)=>{
        return(
          <Display product = {product} key = {i}/>
        )
      })
    }
    </div>
  )
} 