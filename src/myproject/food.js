import Display from "./display"

export default function Food(props) {    
  return(
    <div>
      {
          props.products.filter((product) =>{
           return product.category === "food"
          }).map((product,i)=>{
            return (         
              <Display product = {product} key = {i}/>
            )
          })
      }
    </div>
  )
} 