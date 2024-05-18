import axios from "axios";
import { useEffect , useState} from "react"
import Products from "./products";
import './home.css'
import { useParams, useLocation, Link } from "react-router-dom";
export default function Home() {
    const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category');
  
  
    const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     axios.get('http://localhost:3000/products')
    //     .then((data)=>{setProducts(data.data);console.log(data.data)})
    // },[])

    useEffect(() => {
        let url = 'http://localhost:3000/products';
        if (category) {
          url += `?category=${category}`;
        }
        axios.get(url)
          .then((data) => {
            setProducts(data.data);
          });
      }, [category]);

    
    const [categories, setCategories]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/categories')
        .then((data)=>setCategories(data.data))
    },[])
   
    
    const sign=location.pathname.slice(1);


    const handleDelete = (id) => {
      axios.delete(`http://localhost:3000/products/${id}`)
        .then(response => {
          console.log('Delete response:', response.data);
          setProducts(products.filter(product => product.id !== id));
        })
        .catch(error => console.error('Error deleting product:', error));
        alert("Product deleted successfully")
    };


    return (
    <>
    {sign=="admin"?
    <Link to="/admin/addproduct">
    <button className="btn btn-primary my-2 add" style={{backgroundColor:"#5c4db5",border:"#403a75",width:"84%",height:"6em"}}>Add Product</button>
    </Link> :""
}
    <div className="container">
        <div className="row">
            {products.map((product) => (
            <Products key={product.id} product={product} onDelete={handleDelete} />
            ))}
        </div>
    </div>
    </>
)
}