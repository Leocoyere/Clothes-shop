import '../styles/Cart.css'
import { useEffect } from 'react'
import trash from '../assets/svg/trash.svg'

function Cart({ shoppingCart, setShoppingCart, allID }) {

	function addToCart(element) {
		let id = element['id']
		let price = element['price']
		let image = element['image']
		let name = element['name']
		let color = element['color']
		let size = element['size']
		let quantity = element['quantity']
		const currentItemAdded = shoppingCart.find((item) => item.id === id && item.color === color && item.size === size)
		if (currentItemAdded) {
			console.log('ui')
			const cartFilteredCurrentItem = shoppingCart.filter(
				(item) => item.id !== id || item.color !== color || item.size !== size
			)
			console.log(cartFilteredCurrentItem)
			setShoppingCart([
				...cartFilteredCurrentItem,
				{ id, name, price, image, color, size, quantity: currentItemAdded.quantity + 1 }
			])
		} else {
			console.log('non')
			setShoppingCart(oldone => [...oldone, { id, name, price, image, color, size, quantity }])
		}
		console.log(id+size)
		localStorage.setItem(id + size + color, JSON.stringify(element))
	}

	let result = []
	
	useEffect(() => {
		if ( localStorage[0] ) {
			let ArrayAllID = localStorage[0].split(',')
			console.log(ArrayAllID)
			for (let i = 0; i < ArrayAllID.length; i++) {
				result.push(JSON.parse(localStorage[ArrayAllID[i]]))
				console.log(result)
				addToCart(result[i])
			}
		}
	}, [])

	function removeFromCart(element) {
		let id = element['id']
		let price = element['price']
		let image = element['image']
		let name = element['name']
		let color = element['color']
		let size = element['size']
		let quantity = element['quantity']
		const currentItemRemoved = shoppingCart.find((item) => item.id === id && item.color === color && item.size === size)
		if (currentItemRemoved) {
			const shoppingCartFiltered = shoppingCart.filter(
				(item) => item.id !== id || item.color !== color || item.size !== size
			)
			setShoppingCart([
				...shoppingCartFiltered,
				{ id, name, price, image, color, size, quantity: quantity - 1 }
			])
		}
		localStorage.setItem(id + size, JSON.stringify(element))
	}

	function deleteFromCart(element) {
		
		let ArrayAllID = localStorage[0].split(',')
		let newAllArrayID = ArrayAllID.filter((item) => item !== (element.id + element.size + element.color))
		if ( newAllArrayID.includes("") ) {
			localStorage.removeItem(0)
		} else {
			localStorage.setItem(0, newAllArrayID)
		}
		console.log(newAllArrayID)
		const currentItemDeleted = shoppingCart.find((item) => item.name === element.name)
		if (currentItemDeleted) {
			const shoppingCartFiltered = shoppingCart.filter(
				(item) => item.id !== element.id || item.color !== element.color || item.size !== element.size
			)
			setShoppingCart([
				...shoppingCartFiltered
			])
		}
		let localStorageMinified = localStorage[0].split(',')
		console.log(localStorageMinified)
		for (let index = 0; index < localStorageMinified.length; index++) {
			console.log(localStorageMinified[index])
			localStorageMinified[index] === (element.id + element.size + element.color) ? localStorage.removeItem((`${element.id}${element.size}${element.color}`)) : console.log('non')
		}
	}
    
	useEffect(() => {
		console.log(localStorage)
		console.log(shoppingCart)
	})

    return (
		<div id="shoppingCartContainer">
			{shoppingCart.map((element) =>
			element.quantity > 0 ?
				<div className="shoppingCartItem" key={element.id + element.size}>
					<figure><img src={element.image} alt="blabla"></img></figure>
					<ul className="shoppingCartItemDetails">
						<li className="shoppingCartItemName">{element.name}</li>
						<li className="shoppingCartItemPrice">{element.price / 100} EUR</li>
						<li className="shoppingCartItemColor">{element.color}</li>
						<li className="shoppingCartItemSize">{element.size}</li>
					</ul>
					<aside className="shoppingCartItemSettings">
						<div>
							{
							//<button onClick={() => removeFromCart(element)}>-</button>
							<span>{element.quantity}</span>
							//<button onClick={() => addToCart(element)} >+</button>
							}
						</div>
						<figure><img src={trash} alt="Icône de poubelle" onClick={() => deleteFromCart(element)} ></img></figure>
					</aside>
				</div>
			: deleteFromCart(element)
			)}
		</div>
	)
}

export default Cart