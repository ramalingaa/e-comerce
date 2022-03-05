import './App.css';
import Address from "./Address/Address";
import NavBar from "./NavBar/NabBar"
import Wishlist from "./Wishlist/Wishlist"
import Product from "./ProductListing/Product"
import {usePage} from "./PageContext"
import {IconProvider} from "./WishIcon"
import {WishCounterProvider} from "./WishlistCounter"
import {CartCounterProvider} from "./CartItemCounter"
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

          <div>
               <NavBar />
              
               {page === "Products" &&<Product />}
            {page === "Wishlist" &&<Wishlist />}
            {page === "Cart" &&<Cart />}
            {/* <Cart /> */}

          </div>
          </CartCounterProvider>

        </IconProvider>
        </WishCounterProvider>
        
        
      {/* <Address /> */}
    </div>
    
  );
}

export default App;
