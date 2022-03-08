import { createContext, useContext,useEffect,useState, useRef } from "react"
import axios from "axios"
const WishIcon = createContext()
const useWish = ()=> useContext(WishIcon)

const IconProvider = ({children})=> {
    const [wishData, setWishData] = useState([])
    const isWishRef = useRef(false)

    useEffect(()=> {
        (async ()=>{
    
            try {
              const serverData = await axios.get("https://6217d5f51a1ba20cba924689.mockapi.io/api/wishlist")
              setWishData(serverData.data)
              
            }
            catch(e){
              console.log("Wishlist page failed to load items")
            }
          })()
    },[])
    
    
    return (
        <WishIcon.Provider value = {{wishData,setWishData,isWishRef}}>
            {children}
        </WishIcon.Provider>
    )

}
export {IconProvider,useWish}