import React from 'react'
import { useState, useEffect } from "react"
import ProductList from "../ProductListing/ProductList"
import axios from "axios"
import {useWish} from "../Context/WishIcon"
export default function WishCard() {
  const [wishPage,setWishPage] = useState(true)
  const {wishData} = useWish()

  return (
    <div className="product-container">
      {wishData.map((ele)=>{
        return (
          <ProductList pInfo = {ele} key = {ele.image} wishPage= {wishPage}/>
        )
      })}
    </div>
  )
}
