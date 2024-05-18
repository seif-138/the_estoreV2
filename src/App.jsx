import { useState , useContext, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navBar'
import Login from './components/login'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/home'
import SignUp from './components/signUp'
import About from './components/about'
import ProductDetails from './components/productDetails'
import Edit from './components/edit'
import AddProduct from './components/addProduct'
export const Logged = createContext({ logged: false, updateLogged: () => {} });

function App() {
  const [logged, setLogged] = useState(false);
  
  const value = {
    logged,
    updateLogged: (newLogged) => setLogged(newLogged),
  };
  return (
    <>
    <Logged.Provider value={value}>
   <Router>
    <NavBar />
    <Routes> 
      
      <Route path='/home' element={<Home />} />
      <Route path='/admin' element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/about" element={<About />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/admin/product/:id/edit" element={<Edit />} />
      <Route path='/admin/addproduct' element={<AddProduct />} />
      <Route path="/" element={<Login />} /> 
     

    </Routes>
    
    </Router> 
    </Logged.Provider>
    </>
  )
}

export default App
