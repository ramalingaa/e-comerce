import React, { useEffect,useRef } from 'react'
import "./ProductList.css"
import {useState} from "react"
import {useWishCounter} from "../WishlistCounter"
import {useCartCounter} from "../CartItemCounter"


import axios from "axios"
import { useWish } from '../WishIcon'
export default function ProductList({pInfo, wishPage}) {
  
  const [isWishItem, setIsWishItem] = useState(false)
  const [wishIcon, setWishIcon] = useState("")
  const {setWishCounter} = useWishCounter()
  const {wishData,setWishData} = useWish()
  const {setCartCounter} = useCartCounter()

  // const [isCartItem, setisCartItem] = useState(false)
  const [addToCartData, setAddToCartData] = useState({})
  const isWishRef = useRef(false)
  console.log("wishData", wishData)

  //setting the wishicon with previosly selected wishitems
  useEffect(()=>{
    const isWishItemAdded = wishData.filter((ele)=> ele.image ===pInfo.image )
    console.log("isWishItemAdded", isWishItemAdded)
    if(isWishItemAdded.length > 0){
      isWishRef.current = true
    }
  },[wishData])
 // Wishlist icon button functionality on click of button
  const addToWishList = ()=> {
    //If wishpage is open if condition will get executed
    if(wishPage){
        const indexDelete = wishData.findIndex((ele)=>ele.id === pInfo.id);
        const newWishListData = wishData.filter((ele,index)=>index !== indexDelete );
      (async ()=>{
        try {
          const response = await axios.delete(`https://6217d5f51a1ba20cba924689.mockapi.io/api/wishlist/${pInfo.id}`)
          if(response.status === 200){
            isWishRef.current = false
            setWishIcon("")
            setWishData([...newWishListData])
            setWishCounter((prev)=> prev - 1)
          }
        }
        catch(e){
          console.log("Adding to wishlist failed", e)
        }
      })()
    }
    //product page functionality for addto wishlist button
    else {
      //If not added to wishlist the item will be added to wishlist. The intial state is false so it get's added to wishlist on first click
      if(!isWishRef.current){
        (async ()=>{
          try {
            await axios.post("https://6217d5f51a1ba20cba924689.mockapi.io/api/wishlist",pInfo)
            isWishRef.current = true
            setWishIcon("icon-selected")
            setWishCounter((prev)=> prev + 1)
          }
          catch(e){
            console.log("Adding to wishlist failed", e)
          }
        })()
      }
      //If the item is already added to wishlist it will be deleted 
      else {
        (async ()=>{
          try {
            await axios.delete(`https://6217d5f51a1ba20cba924689.mockapi.io/api/wishlist/${pInfo.id}`)
            isWishRef.current = false
            setWishIcon("")
            setWishCounter((prev)=> prev - 1)
          }
          catch(e){
            console.log("Adding to wishlist failed", e)
          }
        })()
      }
    }
    }

    //Add to cart button functionality goes here
    const addToCart = ()=> {
      
        (async ()=>{
          try {
            const cartItemInfo = {...pInfo,quantity:1}
            const response = await axios.post("https://6217d5f51a1ba20cba924689.mockapi.io/api/cart",cartItemInfo)
            // setCartButton("Added to Cart")
            setAddToCartData(response.data)
            setCartCounter((prev)=> prev + 1)
          }
          catch(e){
            console.log("Adding to wishlist failed", e)
          }
        })()
    }
    //Incrementing the quantity of cart items
    const incrementCartItems = ()=> {

      (async ()=>{
        try {
          
          const response = await axios.put(`https://6217d5f51a1ba20cba924689.mockapi.io/api/cart/${addToCartData.id}`,{...addToCartData,quantity: ++addToCartData.quantity})
          // setCartButton("Added to Cart")
          setAddToCartData(response.data)
        }
        catch(e){
          console.log("Adding to wishlist failed", e)
        }
      })()
    }
    //decrementing the quantity of cart items
    const decrementCartItems = ()=> {
      if(addToCartData.quantity > 1){
        (async ()=>{
          try {
            
            const response = await axios.put(`https://6217d5f51a1ba20cba924689.mockapi.io/api/cart/${addToCartData.id}`,{...addToCartData,quantity: --addToCartData.quantity})
            // setCartButton("Added to Cart")
            setAddToCartData(response.data)
            


          }
          catch(e){
            console.log("Adding to wishlist failed", e)
          }
        })()

      }
      else if (addToCartData.quantity === 1){
        (async ()=>{
          try {
            
            await axios.delete(`https://6217d5f51a1ba20cba924689.mockapi.io/api/cart/${addToCartData.id}`)
            // setCartButton("Added to Cart")
            setAddToCartData({})
            setCartCounter((prev)=> prev - 1)
          }
          catch(e){
            console.log("Adding to wishlist failed", e)
          }
        })()
      }
    }


  return (
    <div className = "product-card">
        <img src={pInfo.image} alt="mens Shirt" className="res-img"/>
        <p>{pInfo.productBrand}</p>
        <p>{pInfo.productTitle}</p>
        <p>{pInfo.price}</p>
        { !(addToCartData.quantity) && <button className="btn primary card-button" onClick = {addToCart}>Add to Cart</button>}
        {addToCartData.quantity > 0 && (
        <div className="added-cart-wrapper">
          <button onClick = {decrementCartItems} className=" quantity-btn"><i className="fas fa-minus"></i></button>
          <p>Quantity: {addToCartData.quantity}</p>
          <button onClick = {incrementCartItems} className=" quantity-btn"><i className="fas fa-plus"></i></button>
        </div>
        )
        }
        {/* <button onClick = {addToWishList}><i className={`fas fa-heart product-wishlist-icon ${wishIcon}`}></i></button> */}
        {wishPage && <button onClick = {addToWishList}><i className={`fas fa-heart product-wishlist-icon icon-selected`}></i></button>}
        {!wishPage && (isWishRef.current ?<button onClick = {addToWishList}><i className={`fas fa-heart product-wishlist-icon icon-selected`}></i></button>:<button onClick = {addToWishList}><i className={`fas fa-heart product-wishlist-icon`}></i></button>)}
    </div>
  )
}
