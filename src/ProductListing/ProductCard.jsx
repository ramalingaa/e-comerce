import React from 'react'
import "./ProductList.css"
import Filter from './Filter'

import { useState } from 'react'
import ProductList from "./ProductList"
import './Filter.css';
export default function ProductCard({serverData}) {

  const [cardDisplay, setCardDisplay] = useState("product-container")
  return (
    <div className="product-container-main">
        <Filter setCardDisplay = {setCardDisplay}/>
        <div>
        <p className="products-number-title"><strong>Showing All Products</strong> <small>({serverData.length} Products)</small> </p>
        <div className = {cardDisplay}>
          
            {
                serverData.map((ele)=>{
                    return (
                        <>
                          <ProductList key = {ele.id} pInfo = {ele}/>
                        </>
                    )
                })
            }
        </div>
        </div>
    </div>
  )
}
