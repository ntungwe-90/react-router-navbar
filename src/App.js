import React from 'react';
import './App.css'
import  {BrowserRouter as Router,Route, Link} from "react-router-dom";
import Home from './Home.js';
import About from './About Us.js';
import Contacts from './Contacts';
import Services from './Services';
import Portfolio from './portfolio';

function App() {
  return (
   <Router className="navtop">
   <nav>
      <h2 style={{color:'white',textAlign:'center'}}>React Router</h2>
       <ul className="list">
        <li> <Link to = "/">Home</Link></li>
        <li> <Link to = "/about us">About Us</Link></li>
        <li><Link to = "/contacts">Contacts</Link></li>
        <li><Link to = "/services">Services</Link></li>
        <li><Link to = "/portfolio">Portfolio</Link></li>
    </ul>
       </nav>

     <Route path = "/" exact component ={Home}/> 
     <Route path = "/about us" exact component ={About}/> 
     <Route path = "/contacts" exact component ={Contacts}/> 
     <Route path = "/services" exact component ={Services}/> 
     <Route path = "/portfolio" exact component ={Portfolio}/> 

   </Router>
  );
}

export default App;
