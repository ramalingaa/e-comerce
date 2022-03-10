import ProductCard from "./ProductCard";
import { useProductContext } from "../Context/ProductContext"


export default function Product() {
 const {filterProductsData} = useProductContext()
  
  return (
    <div >
      <ProductCard serverData = {filterProductsData}/>
      
    </div>
    
  );
}

