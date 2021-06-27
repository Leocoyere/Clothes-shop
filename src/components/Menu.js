import { useState } from 'react'
import '../styles/Menu.css'
import {Link} from "react-router-dom";

function Menu({ menuIsOpen, setMenuIsOpen}) {
    
    const [menSectionIsOpen, setMenSectionIsOpen] = useState(false)
    const [womenSectionIsOpen, setWomenSectionIsOpen] = useState(false)

    return menuIsOpen ? (
        <div id='menu' style={{ transform: 'translateX(0%)'}}>
            <div id='men'>
                <span onClick={() => menSectionIsOpen ? setMenSectionIsOpen(false) : setMenSectionIsOpen(true) }>HOMMES</span>
                { menSectionIsOpen ?
                    <ul>
                        <Link to='/shop/homme/hauts'>TOPS</Link>
                        <Link to='/shop/homme/bas'>BAS</Link>
                        <Link to='/shop/homme/surchemises'>SURCHEMISES</Link>
                        <Link to='/shop/homme/sweats'>SWEAT-SHIRTS</Link>
                        <Link to='/shop/homme/chaussures'>CHAUSSURES</Link>
                        <Link to='/shop/homme/sacs'>SACS</Link>
                    </ul>
                : null }
            </div>
            <div id='women'>
                <span onClick={() => womenSectionIsOpen ? setWomenSectionIsOpen(false) : setWomenSectionIsOpen(true) }>FEMMES</span>
                { womenSectionIsOpen ?
                    <ul>
                        <Link to='/shop/femme/hauts'>TOPS</Link>
                        <Link to='/shop/femme/bas'>BAS</Link>
                        <Link to='/shop/femme/robes'>ROBES</Link>
                        <Link to='/shop/femme/sweats'>SWEAT-SHIRTS</Link>
                        <Link to='/shop/femme/chaussures'>CHAUSSURES</Link>
                        <Link to='/shop/femme/sacs'>SACS</Link>
                    </ul>
                : null }
            </div>
        </div>
    ) : (
        <div id='menu' style={{ transform: 'translateX(-100%)'}}>
            <div id='men'>
                <span onClick={() => menSectionIsOpen ? setMenSectionIsOpen(false) : setMenSectionIsOpen(true) }>HOMMES</span>
                { menSectionIsOpen ?
                    <ul>
                        <Link to='/shop/homme/hauts'>TOPS</Link>
                        <Link to='/shop/homme/bas'>BAS</Link>
                        <Link to='/shop/homme/surchemises'>SURCHEMISES</Link>
                        <Link to='/shop/homme/sweats'>SWEAT-SHIRTS</Link>
                        <Link to='/shop/homme/chaussures'>CHAUSSURES</Link>
                        <Link to='/shop/homme/sacs'>SACS</Link>
                    </ul>
                : null }
            </div>
            <div id='women'>
                <span onClick={() => womenSectionIsOpen ? setWomenSectionIsOpen(false) : setWomenSectionIsOpen(true) }>FEMMES</span>
                { womenSectionIsOpen ?
                    <ul>
                        <Link to='/shop/femme/hauts'>TOPS</Link>
                        <Link to='/shop/femme/bas'>BAS</Link>
                        <Link to='/shop/femme/robes'>ROBES</Link>
                        <Link to='/shop/femme/sweats'>SWEAT-SHIRTS</Link>
                        <Link to='/shop/femme/chaussures'>CHAUSSURES</Link>
                        <Link to='/shop/femme/sacs'>SACS</Link>
                    </ul>
                : null }
            </div>
        </div>
    )
}

export default Menu