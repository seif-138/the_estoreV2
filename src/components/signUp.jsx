import { useEffect, useRef, useState } from "react"
import './login.css'
import axios from 'axios';
import { Link } from "react-router-dom";
export default function SignUp() {
    localStorage.setItem("logged",false);
    let[username, setUsername] = useState('');
    let[password, setPassword] = useState('');
   const validate = () => {
        axios.post('http://localhost:3000/login', {
            name: username,
            password: password
        })
        .then((data)=>console.log(data))
        localStorage.setItem("logged",true);
        window.location.href = "/home";
    }
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