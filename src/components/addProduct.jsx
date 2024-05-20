import axios from "axios"
import './add.css'
import { Navigate, useNavigate } from "react-router-dom";
export default function AddProduct(){
    const navigate=useNavigate();
    const add=()=>{
        const ds=document.getElementById("description").value;
        const prc=document.getElementById("price").value;
        const nm=document.getElementById("title").value;
        const cat=document.getElementById("category").value;
        const img=document.getElementById("image").value;
        const stk=document.getElementById("stock").value;
        axios.post(`http://localhost:3000/products`,{
            title:nm,
            category:cat,
            price:prc,
            description:ds,
            image:img,
            stock:stk
        })
        alert("Product added successfully")
        navigate('/admin')
        
    }
    return(
        <>
        {/* <div className="form" style={{padding:'1em!important'}}> */}
        <div className="form-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="ms-2 my-3">
        <label htmlFor="title">Product title</label>
        <input type="text" name="title" id="title"  className="ms-2"></input>
        </div>

        <div className="ms-2 my-3">
        <label htmlFor="description">Product describtion</label>
        <input type="text" name="description" id="description"  className="ms-2"></input>
        </div>

        <div className="ms-2 my-3">
        <label htmlFor="price">Product price</label>
        <input type="number" name="price" id="price"  className="ms-2"></input>
        </div>

        <div className="ms-2 my-3">
        <label htmlFor="stock">Product stock</label>
        <input type="number" name="stock" id="stock"   className="ms-2"></input>
        </div>

        <div className="ms-2 my-3">
        <label htmlFor="category">Product category</label>
        <input type="text" name="category" id="category"  className="ms-2"></input>
        </div>

        <div className="ms-2 my-3">
        <label htmlFor="image">Product image(url)</label>
        <input type="text" name="image" id="image"  className="ms-2"></input>
        </div>

        <button onClick={add} className="btnk ms-2 my-3">submit</button>
        
        </div>
        {/* </div> */}
        </>
    )
}