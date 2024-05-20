import './about.css';
import title from '../assets/eStore (1).png'
export default function About(){

  return (
    <div>
      <div>
      <img src={title} alt="Logo" width="500px" height="70px" className="d-inline-block align-text-top"  />
      {/* <h1 className="ttl">The eStore</h1> */}
      </div>
      <p>Welcome to</p>
      <p >the eStore</p>
      
      <p > We're your one-stop shop for all sorts of amazing products. Whether you're looking for something for yourself, a gift for a friend, or just browsing for fun, you'll find a great selection here. We offer fast and easy shopping, so you can get what you need quickly and conveniently.</p>
    
    <style>
    
    </style>
    </div>
  );


}