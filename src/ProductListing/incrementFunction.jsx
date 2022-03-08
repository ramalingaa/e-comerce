import axios from "axios";

export function incrementFunction(cartData, pInfo, cartItem, setCartData) {
  return () => {

    (async () => {
      try {
        const newCartData = cartData.filter((ele) => ele.id !== pInfo.id);
        const response = await axios.put(`https://6217d5f51a1ba20cba924689.mockapi.io/api/cart/${pInfo.id}`, { ...cartItem, quantity: ++cartItem.quantity });
        setCartData((prev) => [...newCartData, response.data]);
        // console.log(response.data,"cart data")
      }
      catch (e) {
        console.log("Adding to Cart failed", e);
      }
    })();
  };
}
