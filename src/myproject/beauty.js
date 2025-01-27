import Display from "./display"

export default function Beauty(props) {    
  return(
    <div>
      {
      props.products.filter((product)=>{
        return product.category === "beauty"
      }).map((product,i)=>{
        return (
          <Display product = {product} key = {i}/>
        )
      })
    }
    </div>
  )
} 