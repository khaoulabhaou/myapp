  import Display from "./display"

  export default function Home(props) {    
    return(
      <div>
        {
            props.products.map((products,i)=>{
              <Display product = {products} key = {i}/>
          })
        }
      </div>
    )
  } 