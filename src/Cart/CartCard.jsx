import React from 'react'
import "./Cart.css"
export default function CartCard({pInfo}) {
  return (
    <div className="cart-product-card-container">
        <img src = {pInfo.image} alt = "cartProduct" className="res-img"/>
        <div className = "cart-product-card-text-container">
            <p>{pInfo.productBrand}</p>
            <p>{pInfo.productTitle}</p>
            <p>{pInfo.price}</p>
            <div className="">
                <button>-</button>
                <p>Quantity: {pInfo.quantity}</p>
                <button>-</button>
            </div>
            <button>Move to Wishlist</button>
            <button>Remove from Cart</button>
        </div>
    </div>
  )
}
