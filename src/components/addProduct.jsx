import axios from "axios"

export default function AddProduct(){
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
    }
    return(
        <>
        <div>
        <label htmlFor="title">Product title</label>
        <input type="text" name="title" id="title"></input>
        </div>

        <div>
        <label htmlFor="description">Product describtion</label>
        <input type="text" name="description" id="description"></input>
        </div>

        <div>
        <label htmlFor="price">Product price</label>
        <input type="number" name="price" id="price"></input>
        </div>

        <div>
        <label htmlFor="stock">Product stock</label>
        <input type="number" name="stock" id="stock"></input>
        </div>

        <div>
        <label htmlFor="category">Product category</label>
        <input type="text" name="category" id="category"></input>
        </div>

        <div>
        <label htmlFor="image">Product image(url)</label>
        <input type="text" name="image" id="image"></input>
        </div>

        <button onClick={add}>submit</button>
        </>
    )
}