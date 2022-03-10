import './App.css';
import NavBar from "./NavBar/NabBar"
import Wishlist from "./Wishlist/Wishlist"
import Product from "./ProductListing/Product"
import {IconProvider, WishCounterProvider, CartCounterProvider, ProductProvider, CartProvider, usePage} from "./Context/context-index"

import Cart  from "./Cart/Cart"


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
                  <NavBar />
                  {page === "Products" &&<Product />}
               </ProductProvider>

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
