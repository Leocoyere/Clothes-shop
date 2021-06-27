import ShoppingList from './ShoppingList'
import NavBar from './NavBar'
import Cart from './Cart'
import Menu from './Menu'
// import react from 'react'
import Home from './Home'
import {BrowserRouter as Router, Route} from "react-router-dom";
import SingleItem from './SingleItem';
import { useState } from 'react';

function App() {

    const [shoppingCart, setShoppingCart] = useState([])
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const [allID, setAllID] = useState([])

    return (
        <Router>
            <NavBar shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
            <Menu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
            <Route path="/shop/:gender/:type">
                <ShoppingList shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen}/>
            </Route>
            <Route path="/home" component={Home}/>
            <Route path="/item/:id">
                <SingleItem shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} allID={allID} setAllID={setAllID}/>
            </Route>
        </Router>
    )
}

export default App