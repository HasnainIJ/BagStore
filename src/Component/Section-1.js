import React from "react";

export default function Section1() {
    return(

 <>       
 <div className="row-a"> 
      <div className="section-intro">
      <h1 className="intro-h1"> PLAN YOUR ADVENTURE</h1>
  
  <a  className="intro-anchor" href="#">SHOP NOW</a>
</div>
</div>


<div className="row-a" >
      <div className="section-a">
      <h1 className="sectiona-h1">NEW ARRIVALS</h1>
      <a  className="intro-anchor" href="#">SHOP NOW</a>
      </div>

      <div className="section-b">


      </div>
</div>


<div className="row-a" >
   <div className="section-c">
    <img src={require('../img4.jpg')}/>
   </div>

   <div className="section-c">
      <img src={require('../img3.jpg')}/>

   </div>

   
   <div className="section-c">
      <img src={require('../img4.jpg')} />

   </div>
</div>



<div className="row-a" >
   <div className="section-d">
      <h1 className="sectiond-h1">NOW ON SALE</h1>
      <h3>UP TO 50% OFF</h3>
      <ul className="sectiond-ul">
      <li><a href="#"><img src={require('../img5.jpg')}/></a></li>
      <li><a href="#"><img src={require('../img6.jpg')}/></a></li> 
      <li><a href="#"><img src={require('../img7.jpg')}/></a></li>  
      </ul>

   </div>

</div>


</>

 )




}
