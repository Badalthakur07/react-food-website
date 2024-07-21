import React from "react";
import { useState } from "react";
import './Navbar.css'
import { assets } from "../../assets/assets";
const Navbar = ()=>{
const [menu, setMenu] = useState('home')
return(
<div className="navbar">
<img src={assets.logo} alt="" className="logo"></img>
<ul className="nav-menu">
   <li onClick={()=>setMenu('home')} className={menu=== 'home'? 'active':''}>Home</li>
   <li onClick={()=>setMenu('menu')} className={menu=== 'menu'? 'active':''} >menu</li>
   <li onClick={()=>setMenu('mobile-app')}  className={menu=== 'mobile-app'? 'active':''}>mobile-app</li>
   <li onClick={()=>setMenu('contact-us')} className={menu=== 'contact-us'? 'active':''}>contact us</li>
</ul>
<div className="navbar-right">
<img src={assets.search_icon} alt=""></img>
  <div className="navbar-sarch-icon">
    <img src={assets.basket_icon} alt=""></img>
  </div>
  <div className="dot"></div>
  <button className="btn">Sigin</button>
</div>

</div>
)
}

export default Navbar