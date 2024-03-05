import logo from '../../assets/logo.jpg'
import cartIcon from '../../assets/cart.jpeg'
import './NavBar.css'
import { useState } from 'react';
export default function NavBar() {
    const[menue,setMenue]=useState("shop");

    return (
        <div className='nav-bar'>
            <div className='logo-div'>
                <img className='nav-logo' src={logo} alt="" />
            </div>
            <div className='brand-name'>
                <h3>ShopyFy</h3>
            </div>
            <div className='nav-item'>
                <ul>
                    <li onClick={()=>{setMenue("shop")}}>Shop{menue==="shop"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenue("men")}}>Men{menue==="men"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenue("women")}}>Women{menue==="women"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenue("kids")}}>Kids{menue==="kids"?<hr/>:<></>}</li>
                </ul>
            </div>
            
            <div className='login-btn'>
                <button>Login</button>
            </div>
            <div className='cart-div'>
                <img className='cart-item' src={cartIcon} alt="" />
                <div className="nav-cart-count">0</div>
            </div>
        </div>

    )

}