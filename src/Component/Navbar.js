import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {

    return(

     
  
        <nav className="nav-2">
           <h1 className="nav2-h1">THENORTHPOLE</h1>
           <ul className="ul-c">
              <li><Link className="navanchor-intro" to="/">HOME</Link></li>
              <li><Link className="navanchor-intro" to="/Shop">SHOP</Link></li>
              <li><Link className="navanchor-intro" to="/About">ABOUT</Link></li>
              <li><Link className="navanchor-intro" to="/Contact">Contact</Link></li>
              <input type="text" placeholder="Search.." />
              <button type="submit"><i className="fa fa-search"></i></button>
              <li><Link className="navanchor-intro" to="#" >Log In</Link></li>
   
           </ul>
        </nav>
         
     


    )
    
}