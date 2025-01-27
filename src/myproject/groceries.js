import Display from "./display"

export default function Groceries(props) {    
  return(
    <div>
      {
          props.products.filter((product) =>{
           return product.category === "groceries"
          }).map((product,i)=>{
            return (         
              <Display product = {product} key = {i}/>
            )
          })
      }
    </div>
  )
} 