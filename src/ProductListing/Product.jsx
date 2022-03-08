import NavBar from "../NavBar/NabBar";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import axios from "axios"
import { useProductContext } from "../Context/ProductContext"
export default function Product() {
 const {state} = useProductContext()
  
  return (
    <div >
      <ProductCard serverData = {state.data}/>
      
    </div>
    
  );
}

