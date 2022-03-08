import axios from "axios";

export function decrementFunction(cartItem, cartData, pInfo, setCartData, setCartCounter, setIsCartItem) {
  return () => {
    if (cartItem.quantity > 1) {
      (async () => {
        try {
          const newCartData = cartData.filter((ele) => ele.id !== pInfo.id);
          const response = await axios.put(`https://6217d5f51a1ba20cba924689.mockapi.io/api/cart/${cartItem.id}`, { ...cartItem, quantity: --cartItem.quantity });
          // setCartButton("Added to Cart")
          setCartData((prev) => [...newCartData, response.data]);



        }
        catch (e) {
          console.log("Adding to wishlist failed", e);
        }
      })();

    }
    else if (cartItem.quantity === 1) {
      (async () => {
        try {
          const newCartData = cartData.filter((ele) => ele.id !== pInfo.id);
          await axios.delete(`https://6217d5f51a1ba20cba924689.mockapi.io/api/cart/${pInfo.id}`);
          // setCartButton("Added to Cart")
          setCartData(() => newCartData);
          setCartCounter((prev) => prev - 1);
          setIsCartItem(false);
        }
        catch (e) {
          console.log("Adding to wishlist failed", e);
        }
      })();
    }
  };
}
