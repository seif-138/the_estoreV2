import { useContext, useEffect, useRef, useState } from "react"
import './login.css'
import { Link , useNavigate} from "react-router-dom";
import { Logged } from '../App';


export default function Login() {
  const { logged,updateLogged}=useContext(Logged);

  let[username, setUsername] = useState('');
  let[password, setPassword] = useState('');
  let[users, setUsers] = useState([]);
  let[admin, setAdmin] = useState([]);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const Navigate=useNavigate();

 let validate = () => { 
  const useRef=usernameRef.current.value;
  const passRef=passwordRef.current.value;
  const userType = document.querySelector('input[name="userType"]:checked').value;
  let loggedIn;

  if(userType == 'admin'){
    loggedIn = admin.some(user => useRef === user.name && passRef === user.password);
    if(loggedIn){
      alert('admin login successful');
      updateLogged(true);
      Navigate('/admin');
    } else {
      alert('login failed! please if you are a normal user select user instead of admin');
    }
  } else {
    loggedIn = users.some(user => useRef === user.name && passRef === user.password);

    if(loggedIn){
      alert('login successful');
      updateLogged(true);
      Navigate('/home');
    } else {
      alert('login failed');
    }

  }

}
  useEffect(() => {
    fetch('http://localhost:3000/login')
      .then(res=>res.json())
      .then(data=>setUsers(data))
    },[])
    useEffect(() => { 
      fetch('http://localhost:3000/admin')
      .then(res=>res.json())
      .then(data=>setAdmin(data))
    },[])
   
    // console.log(document.getElementById('un').value);
return(
<>
    <div className="form-container">
    <div className="form">
        <label htmlFor="username">Username</label>
  <input type="text" placeholder="username" name="username" id="un" ref={usernameRef} />
  <label htmlFor="password">Password</label>
  <input type="password" placeholder="password" name="password" id="ps" ref={passwordRef} />
  <div style={{ display: 'flex', alignItems: 'center' }}>
  <input type="radio" name="userType" value="user" className="rad m-3"  /> 
  <label>User</label>
  <input type="radio" name="userType" value="admin" className="rad m-3" /> 
  <label>Admin</label>
</div>
  <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
  <button id="submit" onClick={validate}>Login</button>
  
  
  {/* <input type="radio" radioGroup="log" name="user"> user</input> */}
  {/* <input type="radio" radioGroup="log" name="admin"> admin</input> */}
  
  
    </div>
    </div>

</>
)
}