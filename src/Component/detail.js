import { useState } from 'react';
import React from "react";


export default function Detail(props) {

    let {
        image, name } = props;

    const [explore, setExplore] = useState([]);
    const handleClick = () => {
        console.log("Add to cart");

        if (explore == []) {
            setExplore(!explore);
        } else {
            setExplore(!explore)
        }
    }

    return (

        <div className="Product">

            <div className="row-a" >
                <div className="product-img">
                    <img src={image} />
                </div>
                <div className="row-a">
                    <div className="product-info">
                        <h2>{name}</h2>
                        <p>
                            I'm a product description. This is a great place to "sell" your
                            product and grab buyers' attention. Describe your product clearly
                            and concisely. Use unique keywords. Write your own description
                            instead of using manufacturers' copy.
                        </p>

                        <h2>PRODUCT INFO</h2>
                        <p>
                            I'm a product detail. I'm a great place to add more information
                            about your product such as sizing, material, care and cleaning
                            instructions. This is also a great space to write what makes this
                            product special and how your customers can benefit from this item.
                            Buyers like to know what they’re getting before they purchase, so
                            give them as much information as possible so they can buy with
                            confidence and certainty.
                        </p>

                        <h2>RETURN AND REFUND POLICY</h2>
                        <p>
                            I’m a Return and Refund policy. I’m a great place to let your
                            customers know what to do in case they are dissatisfied with their
                            purchase. Having a straightforward refund or exchange policy is a
                            great way to build trust and reassure your customers that they can
                            buy with confidence.
                        </p>
                    </div>

                    <div className="Cart">

                        <h3>$75.00 $67.00</h3>
                        <label>Color:Blue</label><br />
                        <span className="circle"></span><br />
                        <form><label>Quantity</label><br />
                            <input type="number" id="quantity" name="quantity" min="0" max="100" ></input><br />
                            <input type="button" onClick={handleClick} value="Add to Cart" /><br />

                            {explore && (<div className='Sidebar'><div className='popup-h3'>  <h3> Cart </h3> </div>
                                <div className='card-popup' >
                                 <div className='card-text'>
                                    <div className="popup-img">
                                        <img src={image} />
                                    </div>
                                    <div className='detail-text'>
                                        <h3>{name}</h3>
                                        <h3>$75.00 $67.00</h3>
                                        <input type="number" id="quantity" name="quantity" min="0" max="100" ></input>
                                    </div>
                               </div> <input type="button"  value="View Cart" />
                                </div> </div>)}
                            <input type="button" value="Buy Now" />
                        </form>
                    </div>


                </div>
            </div>





            <div className="row-a" >
                <div className="section-d">
                    <h1 >Related Products</h1>
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
























        </div>
    );
}
