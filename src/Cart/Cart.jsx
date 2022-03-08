import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'
import ProductList from "../ProductListing/ProductList"
import CartCard from "./CartCard"
import { useCartContext } from "../Context/CartContext"
export default function Cart() {
    // const [cartData, setCartData] = useState([])
    const [isCartPage, setIsCartPage] = useState(true)
    const { cartData, setCartData } = useCartContext()
    // useEffect(()=> {
    //     (async ()=> {
    //         try {
    //             const response = await axios.get("https://6217d5f51a1ba20cba924689.mockapi.io/api/cart")
    //             setCartData(response.data)

    //         }catch(e){
    //             console.log("loading cart items failed",":", e)
    //         }
    //     })()
    // },[])
    // console.log(cartData)
  return (
    <div className = "cart-product-mainWrapper">
        {cartData.map((ele)=>{
           return <CartCard pInfo = {ele} />
        })}
    </div>
  )
}
