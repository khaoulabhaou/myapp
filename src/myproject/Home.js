  import Display from "./display"

  export default function Home(props) {    
    return(
      <div className="product-container">
        {
            props.products.map((products,i)=>{
              return(    
                <div>          
                  <Display product = {products} key = {i}/>
                </div>
              )
          })
        }
      </div>
    )
  } 