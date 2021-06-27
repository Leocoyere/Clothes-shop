import '../styles/NavBar.css'
import { useState } from 'react'
import Menu from './Menu'
import {Link} from "react-router-dom";
import magnifyingGlass from '../assets/svg/magnifyingGlass.svg'
import cart from '../assets/svg/cart.svg'
import profile from '../assets/svg/profile.svg'

function NavBar({ shoppingCart, setShoppingCart, menuIsOpen, setMenuIsOpen }) {
    
    return menuIsOpen ? (
        <div id="banner">
            <div id="navbar">
                <div id="burger" onClick={() => setMenuIsOpen(false)}></div>
                <a href='/home' id="logo">BRAND.</a>
                <div id="others">
                    <img src={magnifyingGlass} alt='Magnifying glass icon'></img>
                    <img src={profile} alt='Profile icon'></img>
                    <img src={cart} alt='Shopping cart icon'></img>     
                </div>
            </div>
        </div>
    ) : (
        <div id="banner">
            <div id="navbar">
                <div id="burger" onClick={() => setMenuIsOpen(true)}></div>
                <a href='/home' id="logo">BRAND.</a>
                <div id="others">
                    <img src={magnifyingGlass} alt='Magnifying glass icon'></img>
                    <img src={profile} alt='Profile icon'></img>
                    <img src={cart} alt='Shopping cart icon'></img>     
                </div>
            </div>
        </div>
    )
}

export default NavBar