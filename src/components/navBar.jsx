import * as React from 'react';
import logo from '../assets/eStorelogo1.1.png'
import title from '../assets/eStore (1).png'
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect} from 'react'
import { Logged } from '../App';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut, selectIsLoggedIn } from "./store/slices/loggedIn-slice";
import { selectType } from './store/slices/type-slice';


export default function NavBar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn);


  // const { logged, updateLogged } = useContext(Logged);
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  const handleLogout = () => {
    // updateLogged(false);
    dispatch(logOut());
    navigate('/');
  };
  ////////
  const [dropdownOpen, setDropdownOpen] = useState(false);

 

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
      axios.get('http://localhost:3000/categories')
      .then(res=>{setCategory(res.data)})
  },[])
  
  const cart=useSelector(state=>state.cart)
  console.log(cart);

  const ti=useSelector(selectType);
 

return(
  
    <>
 <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link to="/about">
   <img src={logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top" />
   </Link>
   
   <img src={title}  alt="Logo" width="300" height="50" className="d-inline-block align-text-top"  />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        {ti.type=="user"?
        <Link to='/cart 'style={{textDecoration:"none"}}>
      <button type="button" className={`nav-link logout-button position-relative ${isLoggedIn?' ': 'disabled'}`}>
  cart
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {isLoggedIn? `${cart.length}`: ''  }
    
  </span>
</button>
</Link>
:""
}
        <Link className={`nav-link ${isLoggedIn?' ': 'disabled'}`} aria-current="page" to="/home">Home</Link>
        {/* <Link className={`nav-link ${logged?' ': 'disabled'} `} to="/categories">Categories</Link>
         */}
         <div className={`nav-item dropdown ${isLoggedIn ? '' : 'disabled'}`}>
                <button className={`nav-link dropdown-toggle logout-button  ${isLoggedIn?' ': 'disabled'}`} onClick={toggleDropdown} aria-expanded={dropdownOpen}>
                  Categories
                </button>
        <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
        {category.map((cat) => (
          
        <li key={cat.id}><Link className="dropdown-item" to={`/home?category=${cat.name}`}>{cat.name}</Link></li>
    ))}
                </ul>
                </div>
        <Link className={`nav-link ${isLoggedIn?' ': 'disabled'}`} to="/about" >About Us</Link>
        {!isLoggedIn&& <Link  className="nav-link" to="/">Log in</Link>}
        {isLoggedIn&&<button className="nav-link logout-button" onClick={handleLogout}>log out</button>}
      </div>
    </div>
  </div>
</nav>

    </>
)
}