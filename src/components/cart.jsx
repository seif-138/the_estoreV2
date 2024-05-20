import { useDispatch, useSelector } from "react-redux"
import { removeFromCart, clearCart } from "./store/slices/cart-slice";

export default function Cart() {
    const cart=useSelector(state=>state.cart)   
    const dispatch=useDispatch();
    const total=cart.reduce((acc,product)=>acc+product.price*product.quantity,0)
    
return(
    <>
    <h1 className="text-center my-3">Cart</h1>
    <h3 className="text-center my-3" style={{color:" #6AABF0"}}>Total: {total}$</h3>
    
    <table class="table table-primary my-3">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Image</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    { cart.map((product)=>(
        <tr key={product.id}>
        <th scope="row">{product.id}</th>
        <td>{product.title}</td>
        <td><img src={product.image} style={{width:"150px",height:"150px"}}></img></td>
        <td>{product.quantity}</td>
        <td>{product.price}</td>
        <td><button className="btn btn-danger" onClick={()=>{dispatch(removeFromCart(product))}}>Delete</button></td>
      </tr>
    ))
    }
   <button className="btn btn-primary my-2 add" style={{backgroundColor:"#5c4db5",border:"#403a75",width:"84%",height:"6em"}} onClick={()=>{dispatch(clearCart())}}>Clear all</button>

  </tbody>
</table>
    </>
)
}