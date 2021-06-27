import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { ItemList } from '../datas/ItemList'
import '../styles/SingleItem.css'

function SingleItem({ shoppingCart, setShoppingCart, allID, setAllID }) {

    const {id} = useParams();
    
    const ItemFor = ItemList.map((item) =>
        item.id === id ? item : null
    )

    const Item = ItemFor[id-1]

    const [currentImage, setCurrentImage] = useState(Item.image)
    const [currentColor, setCurrentColor] = useState(Item.color)
    const [currentSize, setCurrentSize] = useState()

    function setColorAndImage(color, image) {
        setCurrentImage(image);
        setCurrentColor(color);
    }

	// function addToCart(id, name, price, image, color, size) {
	// 	const currentItemAdded = shoppingCart.find((item) => item.name === name)
	// 	if (currentItemAdded) {
	// 		const cartFilteredCurrentPlant = shoppingCart.filter(
	// 			(item) => item.name !== name
	// 		)
	// 		setShoppingCart([
	// 			...cartFilteredCurrentPlant,
	// 			{ id, name, price, image, color, size, quantity: currentItemAdded.quantity + 1 }
	// 		])
	// 	} else {
	// 		setShoppingCart([...shoppingCart, { id, name, price, image, color, size, quantity: 1 }])
	// 	}
	// }

    // function addToCart(element) {
	// 	let id = element['id']
	// 	let price = element['price']
	// 	let image = currentImage
	// 	let name = element['name']
	// 	let color = currentColor
		
	// 	const currentItemAdded = shoppingCart.find((item) => item.id === id)
	// 	if (currentItemAdded) {
	// 		const cartFilteredCurrentItem = shoppingCart.filter(
	// 			(item) => item.id !== id
	// 		)
	// 		setShoppingCart([
	// 			...cartFilteredCurrentItem,
	// 			{ id: id, name, price, image, color, size: currentSize, quantity: currentItemAdded.quantity + 1 }
	// 		])
	// 	} else {
	// 		setShoppingCart(oldone => [...oldone, { id, name, price, image, color, size: currentSize, quantity: 1 }])
	// 	}
	// 	localStorage.setItem(id + currentSize + color, JSON.stringify(element))
    //     console.log(id)
	// }

    // useEffect(() => {
    //     setAllID(localStorage[0])
    //     console.log(allID)
	// }, [])

    // function newItem(Item) {
    //     // console.log(Item.id)
    //     addToCart(Item)
    //     console.log(shoppingCart)
    //     shoppingCart.forEach( element => {
    //         localStorage.setItem(element.id + element.size + element.color, JSON.stringify(element))
    //         setAllID(oldOne => oldOne === undefined || oldOne.includes(element.id + element.size + element.color) ? element.id + element.size + element.color : ([oldOne, element.id + element.size + element.color]))
    //     })
    // }

    // useEffect(() => {
    //     localStorage.setItem(0, allID)
    //     console.log(allID)
    //     console.log(localStorage)
	// })
    
    return (
        <div id="container">
            <div id="image-list">
                {Item.alternatives.map((item) => 
                    currentImage === item.image ?
                    <img src={item.image} alt={Item.alt} id='currentImage'></img>
                    : <img onClick={() => setColorAndImage(item.color, item.image)} src={item.image} alt={Item.alt}></img>
                )}
            </div>
            <figure id='image-single'>
                <img src={currentImage} alt={Item.alt}></img>
            </figure>
            <div id="details">
                <h1>{Item.name}</h1>
                <p>{Item.description}</p>
                <div id="price">{Item.price / 100} EUR</div>
                <ul id="sizes">
                    {Item.sizes.map((size) => 
                        currentSize === size ?
                        <li onClick={() => setCurrentSize(size)} id="itemCurrentSize">{size}</li>
                        : <li onClick={() => setCurrentSize(size)}>{size}</li>   
                    )}
                </ul>
                <div id="color">
                    <span>COULEUR : <em>{currentColor}</em></span>
                </div>
                <button>Ajouter au panier</button>
            </div>
        </div>
    )
}

export default SingleItem