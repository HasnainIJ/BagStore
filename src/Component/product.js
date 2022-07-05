import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from "react";




export default function Product(props) {

const {product}=props;

{/*const [ explore , setExplore]=useState(null);

const handleClick=(e)=>{
    e.preventDefault()
  if (e.target.value){
    setExplore(explore);
}else{

   setExplore(!explore)

}}*/}


    return (
    <>     
    
    <Link to="/detail"><div className="card" >

        <div className="card-box" >
            <img src={product.image}/>
        </div>
      {/* {explore ?*/} <input className="btn-hover" type="button" value="Quick View"/> {/*: ''}*/} <br/>
        <div> <h3> {product.name}</h3></div> 
        <div> ${product.price}</div>

    </div></Link>

     </>
  )
}
