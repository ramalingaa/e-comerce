
import { createContext, useContext, useEffect,useReducer } from 'react';
import  axios  from 'axios';

const ProductContext = createContext()
const useProductContext = () => useContext(ProductContext)

const ProductProvider = ({children}) => {

    const productReducer = (state, action) => {
        switch(action.type){
            case "SET_SERVER_DATA": {
                return {...state,serverData:action.payload,data:action.payload, userPrefdata: action.payload}
            }
            case "PRICE_FILTER" : {
                const priceFilterData = state.userPrefdata.filter((ele) => Number(ele.price) < action.payload)
                console.log((action.payload),priceFilterData)
                return {...state, data: priceFilterData}
            }
            case "CAT_FILTER" : {
                const catFilterData = state.data.filter((ele) => ele.category === action.payload)
                return {...state,data:catFilterData}
            }
            case "RESET_PRICE" : {
                return {...state, data:state.serverData}
            }
            case "RATING_FILTER": {
                console.log(action.payload,"from filter")
                const ratingFilterData = state.serverData.filter((ele) => Number(ele.rating) >= action.payload)
                console.log((ratingFilterData))
                return {...state, data: ratingFilterData}
            }
            case "SORT_BY_PRICE": {
                    console.log(action.payload,"payload")
                    if(action.payload === "lowToHigh"){
                        const sortLowToHigh = JSON.parse(JSON.stringify(state))
                        sortLowToHigh.serverData.sort((firstEl, secondEl) =>Number(firstEl.price) - Number(secondEl.price) )
                        return {...state,data:sortLowToHigh.serverData}
                    }
                    else {
                        const sortLowToHigh = JSON.parse(JSON.stringify(state))
                        sortLowToHigh.serverData.sort((firstEl, secondEl) =>Number(secondEl.price) - Number(firstEl.price) )
                        return {...state,data:sortLowToHigh.serverData}
                    }
                    
                
            }
            default:{
            }
        }
    }
    const [state, dispatch] = useReducer(productReducer,{serverData:[],data:[],userPrefdata:[]})

    useEffect(()=>{
        (async ()=>{
            try {
            const response = await axios.get("https://6217d5f51a1ba20cba924689.mockapi.io/api/productsData")
            dispatch({type:"SET_SERVER_DATA",payload:response.data})
            }
            catch(e){
                console.log("Data fetching is failed")
            }
        })()
      },[])
    return (
        <ProductContext.Provider value = {{state, dispatch}}>
            {children}
        </ProductContext.Provider>
    )
}
export {useProductContext,ProductProvider}
