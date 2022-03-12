import './App.css';
import NavBar from "./NavBar/NabBar"
import Wishlist from "./Wishlist/Wishlist"
import Product from "./ProductListing/Product"
import {IconProvider, WishCounterProvider, CartCounterProvider, ProductProvider, CartProvider, usePage, SingleProductPageProvider} from "./Context/context-index"
import Address from "./Address/Address"
import Cart  from "./Cart/Cart"
import SingleProductCard from "./SingleProductPage/SingleProductCard"
function App() {
  const {page, clickHandler} = usePage()
  return (
    <div className="App">
      <button onClick = {clickHandler}>Products</button>
      <button onClick = {clickHandler}>Wishlist</button>
      <button onClick = {clickHandler}>Cart</button>
       <WishCounterProvider> 
        <IconProvider>
        <CartCounterProvider>
        <CartProvider>
          <div>
              <ProductProvider>
                  
                  <SingleProductPageProvider>
                   <NavBar />
                    {page === "Products" &&<Product />}
                    {page === "SingleProduct" && <SingleProductCard />}
                  </SingleProductPageProvider>
                  
               </ProductProvider>
            {page === "Address" && <Address />}
            {page === "Wishlist" &&<Wishlist />}
            {page === "Cart" &&<Cart />}

          </div>
          </CartProvider>
          </CartCounterProvider>

        </IconProvider>
        </WishCounterProvider>
        
         

         
        
    </div>
    
  );
}

export default App;
