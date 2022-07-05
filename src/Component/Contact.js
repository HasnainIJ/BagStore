import React from "react";
import { Router } from "react-router-dom";

export default function Contact(){


return(
<div className="row-a">
   
      <div className="section-i"> 
       <form className="sectioni-form">
         <label>First Name *</label><br/>
         <input type="text"/><br/>
         <label>Last Name *</label><br/>
         <input type="text"/><br/>
         <label> Enter Your Email*</label><br/>
         <input type="email"/><br/>
         <label> Enter Your Subject</label><br/>
         <input type="text"/><br/>
         <label> Enter Your Message</label><br/>
         <input type="textarea" rows="8" column="8"/><br/>
         <button className="btn-i">Send</button>
     </form>
     </div>


      <div className="section-j">
      <h1>CONTACT</h1>
      <p>I'm a paragraph. Click here to add your own text and edit me. 
         I’m a great place for you to tell a story and let your users know a little more about you.</p>
      <ul>
         <li>info@my-domain.com</li>
         <li>Tel: 1-800-000-0000</li>
      </ul>
      
      </div>
   
   </div>
)
}