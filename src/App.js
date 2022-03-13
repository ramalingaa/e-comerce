import './App.css';
import NavBar from "./NavBar/NabBar"
import Wishlist from "./Wishlist/Wishlist"
import Product from "./ProductListing/Product"
import {   ProductProvider, SingleProductPageProvider} from "./Context/context-index"
import Address from "./Address/Address"
import Cart  from "./Cart/Cart"
import SingleProductCard from "./SingleProductPage/SingleProductCard"
import { Routes, Route} from "react-router-dom"
import Home from "./Home/Home"
function App() {
  return (
    <div className="App">
      <ProductProvider>
            <SingleProductPageProvider>
                      <NavBar />
                      <Routes>
                        <Route path = "/Product" element = {<Product />}/>
                        <Route path = "/SPP" element = {<SingleProductCard />}/>
                      </Routes>
          </SingleProductPageProvider>
      </ProductProvider>
      <Routes>
        <Route path = "/Wishlist" element = {<Wishlist />}/>
        <Route path = "/Cart" element = {<Cart />}/>
        <Route path = "/Address" element = {<Address />}/>
        <Route path = "/" element = {<Home />}/>
      </Routes>
      

    </div> 
  );
}

export default App;
