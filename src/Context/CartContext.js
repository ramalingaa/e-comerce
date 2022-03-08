import { createContext, useContext,useEffect, useState} from "react"
import  axios  from 'axios';
const CartContext = createContext()
const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children }) => {
    
    const [cartData, setCartData] = useState([])

    useEffect(()=> {
        (async ()=> {
            try {
                const response = await axios.get("https://6217d5f51a1ba20cba924689.mockapi.io/api/cart")
                setCartData(response.data)

            }catch(e){
                console.log("loading cart items failed",":", e)
            }
        })()
    },[])

    return (
        <CartContext.Provider value = {{cartData,setCartData}}>
            {children}
        </CartContext.Provider>
    )
}
export { useCartContext,CartProvider }
