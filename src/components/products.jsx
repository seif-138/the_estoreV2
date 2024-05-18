import { Link, useLocation } from 'react-router-dom'
import './home.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function Products({product, onDelete}){
    const location = useLocation();
    const sign=location.pathname.slice(1);
    const handleDelete = () => {
        onDelete(product.id);
      };

    const [cart ,setCart]=useState(`${product.stock}`);  
    const addtocart=()=>{
        setCart(cart - 1);
    }
    return(
    <>
    
    <div className="col-md-4 " key={product.id}>
    <div className="card m-2" style={{width: '18rem' , display:"inline-block",height:'34rem',backgroundColor: '#9294e7'}}>
        <img src={product.image} alt={product.name} style={{height:"17em"}} className="card-img-top" />
        <div className="card-body ">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description.slice(0,60)}...</p>
            <p className="card-text">{cart} left in stock</p><br></br>
            <p className="card-text">{product.price}$</p>
            </div>
            <div> 
                { sign=="home"? 
                <Link to={`/product/${product.id}`}>
          <button className="btn btn-primary"  style={{backgroundColor:"#5c4db5",border:"#403a75"}}>View</button> 
                 </Link>
          : <Link to={`product/${product.id}/edit`} >
              <button className="btn btn-primary ed"  style={{backgroundColor:"#5c4db5",border:"#403a75"}}>Edit</button>
            </Link>
            }
            { sign=="home"?   <button onClick={addtocart}className="btn btn-primary ms-2" style={{backgroundColor:"#5c4db5",border:"#403a75"}}>Add to cart</button>:<button onClick={handleDelete} className="btn btn-primary ms-2 dlt" style={{backgroundColor:"#5c4db5",border:"#403a75"}}>Delete</button>}
        </div>
    </div>
</div>

    </>
    )
}