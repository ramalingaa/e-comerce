import React from 'react'
import CartCard from "./CartCard"
import { useCartContext } from "../Context/CartContext"
import OrderSummary from './OrderSummary';
export default function Cart() {
    const { cartData, setCartData } = useCartContext()
    
  return (
    <div className = "cart-product-mainWrapper">
        {cartData.map((ele)=>{
           return <CartCard pInfo = {ele} key = {ele.id}/>
        })}
        <OrderSummary />
    </div>
  )
}
