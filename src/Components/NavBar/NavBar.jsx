import logo from '../../assets/logo.jpg'
import cartIcon from '../../assets/cart.jpeg'
import './NavBar.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
                    <li onClick={()=>{setMenue("shop")}}><Link to='/' style={{textDecoration:'none'}}>Shop</Link>{menue==="shop"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenue("men")}}><Link to='/mens' style={{textDecoration:'none'}}>Men</Link>{menue==="men"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenue("women")}}><Link to='/womens' style={{textDecoration:'none'}}>Women</Link>{menue==="women"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenue("kids")}}><Link to='/kids' style={{textDecoration:'none'}}>Kids</Link>{menue==="kids"?<hr/>:<></>}</li>
                </ul>
            </div>
            
            <div className='login-btn'>
                <Link to="/login"><button>Login</button></Link>
            </div>
            <div className='cart-div'>
              <Link to="/cart"><img className='cart-item' src={cartIcon} alt="" /></Link>  
                <div className="nav-cart-count">0</div>
            </div>
        </div>

    )

}