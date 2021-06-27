import { ItemList } from '../datas/ItemList'
import Item from './Item'
import { useState, useEffect } from 'react'
import react from 'react'
import '../styles/ShoppingList.css'
import {useParams} from "react-router-dom";

function ShoppingList({ shoppingCart, setShoppingCart, menuIsOpen, setMenuIsOpen }) {

    
    let {type, gender} = useParams();
    let prevType = type
    const [filterMenuIsOpen, setFilterMenuIsOpen] = useState(false)
    const [currentType, setCurrentType] = useState(type)
    const [currentGender, setCurrentGender] = useState(gender)
    const [currentSize, setCurrentSize] = useState()
    const [currentCategory, setCurrentCategory] = useState()
    const [currentPrice, setCurrentPrice] = useState(500000)
    const prices = [1000, 2000, 3000, 4000, 5000];

    useEffect(() => {
        setMenuIsOpen(false)
        console.log(currentGender)
    }, [])

    function reloadPage() {
        if (!(currentType === prevType) || !(currentType === type)) {
            window.location.reload()
        }
    }
    
    useEffect(() => {
        reloadPage()
    })

    const ItemCategories = ItemList.reduce(
		(acc, item) =>
			acc.includes(item.category) ? acc : (currentType === item.type && item.gender === currentGender ? acc.concat(item.category) : acc),
		[]
	)
    
	const categories = ItemCategories.reduce(
		(acc, category) =>
			acc.includes(category) ? acc : acc.concat(category),
		[]
	)

    const ItemSizes = ItemList.reduce(
		(acc, item) =>
			acc.includes(item.sizes) ? acc : (currentType === item.type && gender === currentGender ? acc.concat(item.sizes) : acc),
		[]
	)
    
	const sizes = ItemSizes.reduce(
		(acc, size) =>
			acc.includes(size) ? acc : acc.concat(size),
		[]
	)

    return filterMenuIsOpen ? (
        <react.Fragment>
            <div id='filters' style={{ transform: 'translate(0)'}}>
                <ul>CATÉGORIES
                    {categories.map((category) =>
                        <li>
                            <span>{category}</span>
                            { currentCategory === category ? <div className="checkbox currentCheckbox" onClick={() => setCurrentCategory('')}></div>
                            : <div className="checkbox" onClick={() => setCurrentCategory(category)}></div> }
                        </li>
                    )}
                </ul>
                <ul>TAILLE
                {sizes.map((size) =>
                        <li>
                            <span>{size}</span>
                            { currentSize === size ? <div className="checkbox currentCheckbox" onClick={() => setCurrentSize('')}></div>
                            : <div className="checkbox" onClick={() => setCurrentSize(size)}></div> }
                        </li>
                    )}
                </ul>
                <ul>PRIX
                    { prices.map((number) => 
                        <li>
                            <span>{number / 100} €</span>
                            { currentPrice === number ? <div className="checkbox currentCheckbox" onClick={() => setCurrentPrice(100000)}></div>
                            : <div className="checkbox" onClick={() => setCurrentPrice(number)}></div> }
                        </li>
                    )}

                </ul>
            </div>
            <button id="filterButton" onClick={() => setFilterMenuIsOpen(false)}>Fermer</button>
            <div id='shop'>
            {
                ItemList.map(({ id, image, name, price, alt, type, sizes, category, gender, alternatives }) =>
                    currentSize && currentCategory ? 
                        category.includes(currentCategory) && sizes.includes(currentSize) && currentType === type && currentPrice >= price && currentGender === gender ?
                            <Item key={id} id={id} image={image} name={name} price={price} alt={alt} category={category} alternatives={alternatives} gender={gender}/>
                        : 
                        null
                    : 
                    currentSize ? 
                        sizes.includes(currentSize) && currentType === type && currentPrice >= price && currentGender === gender ?
                            <Item key={id} id={id} image={image} name={name} price={price} alt={alt} category={category} alternatives={alternatives} gender={gender}/>
                        : 
                        null
                    : 
                    currentCategory ? 
                        category.includes(currentCategory) && currentType === type && currentPrice >= price && currentGender === gender ?
                            <Item key={id} id={id} image={image} name={name} price={price} alt={alt} category={category} alternatives={alternatives} gender={gender}/>
                        : 
                        null
                    : 
                        currentType === type && currentPrice >= price && currentGender === gender ?
                            <Item key={id} id={id} image={image} name={name} price={price} alt={alt} category={category} alternatives={alternatives} gender={gender}/>
                        : 
                        null
            )}
            </div>
        </react.Fragment>
    ) : (
        <react.Fragment>
            <div id='filters'>
                <ul>CATÉGORIES
                    <li>T-shirts</li>
                    <li>Pantalons</li>
                    <li>Chemises</li>
                    <li>Robes</li>
                </ul>
                <ul>TAILLE
                    <li>S</li>
                    <li>M</li>
                    <li>L</li>
                    <li>XL</li>
                </ul>
                <ul>PRIX
                    <li>10 €</li>
                    <li>20 €</li>
                    <li>30 €</li>
                    <li>40 €</li>
                    <li>50 €</li>
                </ul>
            </div>
            <button id="filterButton" onClick={() => setFilterMenuIsOpen(true)}>Filtres</button>
            <div id='shop'>
            {
                ItemList.map(({ id, image, name, price, alt, type, sizes, category, gender, alternatives }) =>
                    currentSize && currentCategory ? 
                        category.includes(currentCategory) && sizes.includes(currentSize) && currentType === type && currentPrice >= price && currentGender === gender ?
                            <Item key={id} id={id} image={image} name={name} price={price} alt={alt} category={category} alternatives={alternatives} gender={gender}/>
                        : 
                        null
                    : 
                    currentSize ? 
                        sizes.includes(currentSize) && currentType === type && currentPrice >= price && currentGender === gender ?
                            <Item key={id} id={id} image={image} name={name} price={price} alt={alt} category={category} alternatives={alternatives} gender={gender}/>
                        : 
                        null
                    : 
                    currentCategory ? 
                        category.includes(currentCategory) && currentType === type && currentPrice >= price && currentGender === gender ?
                            <Item key={id} id={id} image={image} name={name} price={price} alt={alt} category={category} alternatives={alternatives} gender={gender}/>
                        : 
                        null
                    : 
                        currentType === type && currentPrice >= price && currentGender === gender ?
                            <Item key={id} id={id} image={image} name={name} price={price} alt={alt} category={category} alternatives={alternatives} gender={gender}/>
                        : 
                        null
            )}
            </div>
        </react.Fragment>
    )
}

export default ShoppingList