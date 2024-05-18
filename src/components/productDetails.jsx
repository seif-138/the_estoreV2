import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function ProductDetails() {
    const {id}=useParams();
   
    const [product, setProduct] = useState({});
    useEffect(() => {
       axios.get(`http://localhost:3000/products?id=${id}`)
       .then((data) => {
           setProduct(data.data[0]);
          
       });
    }, []);
    return (
      <>
      <img src={product.image} alt={product.name} />
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.price}$</p>
        <p>{product.stock} left in stock</p>
      </>
    )
}