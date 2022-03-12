import axios from "axios";

export function incrementFunction(cartData, pInfo, cartItem = pInfo, setCartData) {
  return () => {

    (async () => {
      try {
        console.time("Increment")
        const newIncrementData = JSON.parse(JSON.stringify(cartData));
        const indexOFCartItem = newIncrementData.findIndex((ele) => ele.image === pInfo.image)
        ++newIncrementData[indexOFCartItem].quantity
         await axios.put(`https://6217d5f51a1ba20cba924689.mockapi.io/api/cart/${cartItem.id}`, { ...cartItem, quantity: ++cartItem.quantity });
         setCartData(() => [...newIncrementData]);
         console.timeEnd("Increment")
      }
      catch (e) {
        console.log("Adding to Cart failed", e);
      }
    })();
  };
}
