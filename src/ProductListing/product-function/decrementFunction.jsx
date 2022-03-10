import axios from "axios";

export function decrementFunction(cartItem, cartData, pInfo, setCartData, setCartCounter, setIsCartItem) {
  return () => {
    if (Number(cartItem.quantity) > 1) {
      (async () => {
        try {
          const newDecrementData = JSON.parse(JSON.stringify(cartData));
          const indexOFCartItem = newDecrementData.findIndex((ele) => ele.image === cartItem.image)
          --newDecrementData[indexOFCartItem].quantity
          await axios.put(`https://6217d5f51a1ba20cba924689.mockapi.io/api/cart/${cartItem.id}`, { ...cartItem, quantity: --cartItem.quantity });
          setCartData(() => newDecrementData);



        }
        catch (e) {
          console.log("Adding to wishlist failed", e);
        }
      })();

    }
    else if (Number(cartItem.quantity) === 1) {
      (async () => {
        try {
          const newCartData = cartData.filter((ele) => ele.id !== cartItem.id);
          await axios.delete(`https://6217d5f51a1ba20cba924689.mockapi.io/api/cart/${cartItem.id}`);
          
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
