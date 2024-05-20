import { useEffect, useRef, useState } from "react"
import './login.css'
import axios from 'axios';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut, selectIsLoggedIn } from "./store/slices/loggedIn-slice";
import { selectType } from "./store/slices/type-slice";
import { setType } from './store/slices/type-slice';

export default function SignUp() {
    localStorage.setItem("logged",false);
    let[username, setUsername] = useState('');
    let[password, setPassword] = useState('');
    const navigate=useNavigate();
   const validate = () => {
        axios.post('http://localhost:3000/login', {
            name: username,
            password: password
        })
        .then((data)=>console.log(data))
        // localStorage.setItem("logged",true);
        // window.location.href = "/home";
        dispatch(logIn());
        dispatch(setType('user'));
        navigate('/home');
        
    }

    const dispatch = useDispatch(); 
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <>
      <div className="form-container">
    <div className="form">
        <label htmlFor="username">Username</label>
  <input type="text" placeholder="username" name="username" id="un" onChange={(e)=>setUsername(e.target.value)} />
  <label htmlFor="password">Password</label>
  <input type="password" placeholder="password" name="password" id="ps"  onChange={(e)=>setPassword(e.target.value)}/>
 
  <button id="submit" onClick={validate}>Sign Up</button>
  
    </div>
    </div>
        </>
    )
}