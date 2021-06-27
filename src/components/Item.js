import '../styles/Item.css'
import '../styles/reset.css'
import {Link} from "react-router-dom";
import { useState } from 'react'

function Item({ id, image, name, price, alt, type, alternatives }) {

    const [currentImage, setcurrentImage] = useState(image)
    
    return(
        <div className='item'>
            <div className="imageContainer">
                <img src={currentImage} alt={alt} className='img-cover'/>
                <ul id="colors-list">
                    {   alternatives.length > 1 ?
                            alternatives.map((alternative) =>
                                alternative.image === currentImage ?
                                <li className="currentBall" onClick={() => setcurrentImage(alternative.image) }></li>
                                : 
                                <li onClick={() => setcurrentImage(alternative.image) }></li>
                            ) : null
                    }
                </ul>
            </div>
            <aside>
                <h6>{ price / 100 } EUR</h6>
                <Link to={`/item/${id}`}>
                    <span>{ name }</span>
                </Link>
            </aside>
        </div>
    )
}

export default Item