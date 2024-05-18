import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Edit() {
    const {id}=useParams();
    
   const[product, setProduct]= useState({});
    useEffect(() => {
    axios.get(`http://localhost:3000/products?id=${id}`)
    .then((data) => {
        setProduct(data.data[0]);
    });
    }, []);

    const edt=()=>{
        const prce=document.getElementById('nprice').value;
        const stck=document.getElementById('nitem').value;
        axios.patch(`http://localhost:3000/products?id=${id}`,{
            price:prce,
            stock:stck
        })
    }
return (
    <>
    <img src={product.id} ></img>
    <h1>{product.name}</h1>
        <p>{product.description}</p>
        <div>
        <p>{product.price}$</p>
        <label >new Price</label>
        <input type="text" id="nprice"></input>
        </div>
        <div>
        <p>{product.stock} left in stock</p>
        <label >number of items in stock </label>
        <input type="text" id="nitem"></input>
        </div>
        <button onClick={edt}>Submit</button>
            

    </>
)
}