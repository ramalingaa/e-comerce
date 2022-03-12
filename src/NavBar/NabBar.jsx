import { useWishCounter, useCartCounter, useProductContext, usePage } from "../Context/context-index"


export default function Navbar() {
    const {dispatch} = useProductContext()
    const {wishCounter} = useWishCounter()
    const {cartCounter} = useCartCounter()
    const {setPage} = usePage()
    
    return (
      <nav className="navbar ">
        <div>
          <a href="../index.html" className="navbar-logo">
            <i className="fas fa-meteor nav-logo"></i>
            <h2>Surplus</h2>
          </a>
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
          <a href="../Wishlist/wishlist.html" className="page-links wish-list">Wishlist
            <i className="far fa-heart nav-icon wish-icon"></i> <p className="wish-counter">{wishCounter}</p>
          </a>
          <a href="../Cart-page/cart.html" className="page-links cart-icon">Cart 
            <i className="fas fa-cart-plus nav-icon "></i> <p className="wish-counter">{cartCounter}</p>
          </a>
        </div>
      </nav>
    );
  }
  