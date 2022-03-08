import './App.css';
import Address from "./Address/Address";
import NavBar from "./NavBar/NabBar"
import Wishlist from "./Wishlist/Wishlist"
import Product from "./ProductListing/Product"
import {usePage} from "./Context/PageContext"
import {IconProvider} from "./Context/WishIcon"
import {WishCounterProvider} from "./Context/WishlistCounter"
import {CartCounterProvider} from "./Context/CartItemCounter"
import {ProductProvider} from "./Context/ProductContext"
import { CartProvider } from "./Context/CartContext"
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
               <NavBar />
              <ProductProvider>
                  {page === "Products" &&<Product />}
               </ProductProvider>

            {page === "Wishlist" &&<Wishlist />}
            {page === "Cart" &&<Cart />}
            {/* <Cart /> */}

          </div>
          </CartProvider>
          </CartCounterProvider>

        </IconProvider>
        </WishCounterProvider>
        
        
      {/* <Address /> */}
    </div>
    
  );
}

export default App;
