import NavBar from "../NavBar/NabBar";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import axios from "axios"
export default function Product() {
  const [serverData, setServerData] = useState([]);
  useEffect(()=>{
    axios.get("https://6217d5f51a1ba20cba924689.mockapi.io/api/productsData").then((res)=> setServerData(res.data))
  },[])
  
  return (
    <div >
      <ProductCard serverData = {serverData}/>
      
    </div>
    
  );
}

