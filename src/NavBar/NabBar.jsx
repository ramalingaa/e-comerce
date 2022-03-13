import { useWishCounter, useCartCounter, useProductContext, usePage } from "../Context/context-index"
import { Link } from "react-router-dom"

export default function Navbar() {
    const {dispatch} = useProductContext()
    const {wishCounter} = useWishCounter()
    const {cartCounter} = useCartCounter()
    const {setPage} = usePage()
    
    return (
      <nav className="navbar ">
        <div>
          <Link to = "/">
              <div href="../index.html" className="navbar-logo">
                  <i className="fas fa-meteor nav-logo"></i>
                  <h2>Surplus</h2>
              </div>
          </Link>
        </div>
        <div className="navbar-search">
          <i className="fas fa-search search-icon"></i>
          <input
            type="text"
            className="i-text navbar-input-search"
            placeholder="Search for products, brands and more"
          onChange = {(e) => dispatch({type:"SEARCH_FILTER", payload:e.target.value})} onKeyPress={(e) => e.key === "Enter" && setPage(() => "Products")}/>
        </div>
        <div className="navbar-cart">
          <button className="btn primary">
            <a href="../Login-page/login.html">Login</a>
          </button>
          <Link to = "/Wishlist" ><div className="page-links wish-list">Wishlist
            <i className="far fa-heart nav-icon wish-icon"></i> <p className="wish-counter">{wishCounter}</p>
          </div></Link>
          <Link to = "/Cart" ><div className="page-links cart-icon">Cart 
            <i className="fas fa-cart-plus nav-icon "></i> <p className="wish-counter">{cartCounter}</p>
          </div></Link>
        </div>
      </nav>
    );
  }
  