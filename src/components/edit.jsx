import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import './edit.css'
import { useDispatch, useSelector } from "react-redux";

export default function Edit() {
    const {id}=useParams();
    const navigate = useNavigate();

    const cart=useSelector(state=>state.cart)
    const dispatch=useDispatch();

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
        let np=true,ns=true;
        if(prce==""){
            np=false;
        }
        if(stck==""){
            ns=false;
        }
        let data = {};

        if (np) {
            data.price = prce;
        }
        if (ns) {
            data.stock = stck;
        }

      
        axios.patch(`http://localhost:3000/products/${id}`, data)
        .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.error(error);
          });
        alert("Product updated successfully")
        navigate('/admin')
        
    }
return (
    <>
    {product && (
        <div>
           
    <img src={product.image} ></img>
    <h1>{product.title}</h1>
        <p>{product.description}</p>
        <div>
        <p>old price: {product.price}$</p><br></br>
        <label >new Price</label><br />
        <input type="text" id="nprice" className="ms-2"></input>
        </div>
        <div>
        <p>{product.stock} left in stock</p><br></br>
        <label >number of items in stock </label><br />
        <input type="text" id="nitem" className="ms-2"></input>
        </div>
        <button onClick={edt} className="btnk ms-2 my-2">Submit</button>
        </div>
    )}   

    </>
)
}