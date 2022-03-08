import React from 'react'
import "./Cart.css"
import  axios  from 'axios';
import { useCartContext } from "../Context/CartContext"
import { useCartCounter } from "../Context/CartItemCounter"

export default function CartCard({pInfo}) {
  const { cartData, setCartData } = useCartContext()
const { setCartCounter } = useCartCounter()
  const incrementCartItems = ()=> {
      
    (async ()=>{
      try {
        const newCartData = cartData.filter((ele) => ele.id !== pInfo.id)
        const response = await axios.put(`https://6217d5f51a1ba20cba924689.mockapi.io/api/cart/${pInfo.id}`,{...pInfo,quantity: ++pInfo.quantity})
        setCartData((prev) => [...newCartData,response.data])
        // console.log(response.data,"cart data")
      }
      catch(e){
        console.log("Adding to Cart failed", e)
      }
    })()
  }

  const decrementCartItems = ()=> {
    if(pInfo.quantity > 1){
      (async ()=>{
        try {
          const newCartData = cartData.filter((ele) => ele.id !== pInfo.id)
          const response = await axios.put(`https://6217d5f51a1ba20cba924689.mockapi.io/api/cart/${pInfo.id}`,{...pInfo,quantity: --pInfo.quantity})
          // setCartButton("Added to Cart")
          setCartData((prev) => [...newCartData,response.data])
          


        }
        catch(e){
          console.log("Adding to wishlist failed", e)
        }
      })()

    }
    else if (pInfo.quantity === 1){
      (async ()=>{
        try {
          const newCartData = cartData.filter((ele) => ele.id !== pInfo.id)
          await axios.delete(`https://6217d5f51a1ba20cba924689.mockapi.io/api/cart/${pInfo.id}`)
          // setCartButton("Added to Cart")
          setCartData(() => newCartData)
          setCartCounter((prev)=> prev - 1)
        }
        catch(e){
          console.log("Adding to wishlist failed", e)
        }
      })()
    }
  }
  return (
    <div className="cart-product-card-container">
        <div>
          <img src = {pInfo.image} alt = "cartProduct" className="res-img cart-img "/>
        </div>
        <div className = "cart-product-card-text-container">
            <p>{pInfo.productBrand}</p>
            <p>{pInfo.productTitle}</p>
            <p>₹{pInfo.price}</p>
            <div className="cart-btn-wrapper">
                <button className="quantity-btn" onClick = {decrementCartItems}><i className="fas fa-minus"></i></button>
                <p>Quantity: {pInfo.quantity}</p>
                <button className="quantity-btn" onClick = {incrementCartItems}><i className="fas fa-plus"></i></button>
            </div>
            <button className="btn primary">Move to Wishlist</button>
            <button ><i className="fas fa-times product-wishlist-icon cart-product-icon"></i></button>
        </div>
    </div>
  )
}
