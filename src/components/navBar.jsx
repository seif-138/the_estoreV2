import * as React from 'react';
import logo from '../assets/eStorelogo1.1.png'
import title from '../assets/eStore (1).png'
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect} from 'react'
import { Logged } from '../App';
import { useState } from 'react';
import axios from 'axios';

export default function NavBar() {
  const { logged, updateLogged } = useContext(Logged);
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  const handleLogout = () => {
    updateLogged(false);
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
        <Link className={`nav-link ${logged?' ': 'disabled'}`} aria-current="page" to="/home">Home</Link>
        {/* <Link className={`nav-link ${logged?' ': 'disabled'} `} to="/categories">Categories</Link>
         */}
         <div className={`nav-item dropdown ${logged ? '' : 'disabled'}`}>
                <button className={`nav-link dropdown-toggle logout-button  ${logged?' ': 'disabled'}`} onClick={toggleDropdown} aria-expanded={dropdownOpen}>
                  Categories
                </button>
        <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
        {category.map((cat) => (
          
        <li key={cat.id}><Link className="dropdown-item" to={`/home?category=${cat.name}`}>{cat.name}</Link></li>
    ))}
                </ul>
                </div>
        <Link className={`nav-link ${logged?' ': 'disabled'}`} to="/about" >About Us</Link>
        {!logged&& <Link  className="nav-link" to="/">Log in</Link>}
        {logged &&<button className="nav-link logout-button" onClick={handleLogout}>log out</button>}
      </div>
    </div>
  </div>
</nav>

    </>
)
}