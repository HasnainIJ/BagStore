import React from "react";
import { Link } from "react-router-dom";
import Product from '../Component/product';
import data from '../Component/data';
export default function Shop(props) {
    console.log("Hello");


    const { products } = data;





    return (

        <div className="ShopSection">

            <div className="row-a" >
                <div className="section-d">
                    <h1 className="sectiond-h1">NEW ARRIVALS</h1>
                    <ul className="sectiond-ul">
                        <li><div className="card">

                            <div className="card-box">
                                <img src={require('../ShopImg/img9.jpg')} />
                            </div>

                            <label>Canvas BACKPACK</label><br />
                            <label>$75</label>

                        </div></li>
                        <li><div className="card">

                            <div className="card-box">
                                <img src={require('../ShopImg/img15.jpg')} />
                            </div>

                            <label>Canvas BACKPACK</label><br />
                            <label>$75</label>

                        </div></li>
                        <li><div className="card">

                            <div className="card-box">
                                <img src={require('../ShopImg/img24.jpg')} />
                            </div>

                            <label>Canvas BACKPACK</label><br />
                            <label>$75</label>

                        </div></li>
                    </ul>

                </div>
            </div>

            <h1 className="h1-card">ALL BAGS</h1>

            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>


    )
}
















