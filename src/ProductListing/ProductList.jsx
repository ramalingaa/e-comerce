import React, { useEffect } from 'react'
import "./ProductList.css"
import {useState} from "react"
import {useWishCounter} from "../Context/WishlistCounter"
import {useCartCounter} from "../Context/CartItemCounter"
import { useCartContext } from "../Context/CartContext"



import { useWish } from '../Context/WishIcon'
import { decrementFunction } from './decrementCartItems'
import { incrementFunction } from './incrementFunction'
import { addToCartFunction } from './addToCartFunction'
import { addToWishlistFunction } from './addToWishlistFunction'

export default function ProductList({pInfo, wishPage}) {
  
  const [isWishItem, setIsWishItem] = useState(false)
  const [wishIcon, setWishIcon] = useState("")
  const [isCartItem, setIsCartItem] = useState(false)
  const [cartItem, setCartItem] = useState({})

  const {setWishCounter} = useWishCounter()
  const {wishData,setWishData} = useWish()
  const {setCartCounter} = useCartCounter()
  const { cartData, setCartData } = useCartContext()

  // console.log("wishData", wishData)
  // console.log(typeof(pInfo.quantity),"Pinfo")

  //setting the wishicon with previosly selected wishitems
  useEffect(()=>{
    const isWishItemAdded = wishData.filter((ele)=> ele.image ===pInfo.image )
    if(isWishItemAdded.length > 0){
      setIsWishItem(true)
    }
  },[wishData])

  useEffect(()=>{
    const isCartItemAdded = cartData.find((ele) => ele.image === pInfo.image)
    if(isCartItemAdded){
      setIsCartItem(true)
      setCartItem({...isCartItemAdded})
    }
  },[cartData])
 // Wishlist icon button functionality on click of button
  const addToWishList = addToWishlistFunction(wishPage, wishData, pInfo, setIsWishItem, setWishIcon, setWishData, setWishCounter, isWishItem)

    //Add to cart button functionality goes here
    const addToCart = addToCartFunction(pInfo, setCartData, setCartCounter)
    //Incrementing the quantity of cart items
    const incrementCartItems = incrementFunction(cartData, pInfo, cartItem, setCartData)
    //decrementing the quantity of cart items
    const decrementCartItems = decrementFunction(cartItem, cartData, pInfo, setCartData, setCartCounter, setIsCartItem)


  return (
    <div className = "product-card">
        <img src={pInfo.image} alt="mens Shirt" className="res-img"/>
        <p>{pInfo.productBrand}</p>
        <p>{pInfo.productTitle}</p>
        <p>{pInfo.price}</p>
        { !(isCartItem) && <button className="btn primary card-button" onClick = {addToCart}>Add to Cart</button>}
        {isCartItem && (
        <div className="added-cart-wrapper">
          <button onClick = {decrementCartItems} className=" quantity-btn"><i className="fas fa-minus"></i></button>
          <p>Quantity: {cartItem.quantity}</p>
          <button onClick = {incrementCartItems} className=" quantity-btn"><i className="fas fa-plus"></i></button>
        </div>
        )
        }
        {wishPage && <button onClick = {addToWishList}><i className={`fas fa-heart product-wishlist-icon icon-selected`}></i></button>}
        {!wishPage && (isWishItem ?<button onClick = {addToWishList}><i className={`fas fa-heart product-wishlist-icon icon-selected`}></i></button>:<button onClick = {addToWishList}><i className={`fas fa-heart product-wishlist-icon`}></i></button>)}
    </div>
  )
}




