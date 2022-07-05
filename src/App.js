import Navbar from './Component/Navbar';
import  Section1  from './Component/Section-1';
import About from './Component/About';
import Contact from './Component/Contact';
import Section6 from './Component/Section-6';
import Shop  from   './Component/shop';
import Detail from './Component/detail';
import data from './Component/data';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {

  
  
  
  return (
   
<Router>

<> 
     
<Navbar />
  
<div className="container" >
<Routes>

<Route exact path="/"    element={<Section1/>}/>
                    
<Route exact path="/About" element={<About/>}/>
<Route exact path="/Contact" element={<Contact/>}/>
<Route  exact path="/shop" element={<Shop/>}/>
<Route exact path="/detail" element={ <Detail  image={`${require('./ShopImg/img9.jpg')}`} name="Canvas Backpack"/>}/>
  

  






</Routes>

</div>
  



<footer className="footer">

<p> <span > &copy; </span> 2023 by NORTHPOLE. Proudly created by HS</p>
<ul>
  <li>< a  href="#">FAQ</a></li>
  <li>< a  href="#">FORUM</a></li>
  <li>< a  href="#">Shipping & Returns</a></li>
  <li>< a  href="#">Terms & Conditions</a></li>
</ul>

</footer>

</>
</Router>

  );
}

export default App;
