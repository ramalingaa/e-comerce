import axios from "axios";

export function addToCartFunction(pInfo, setCartData, setCartCounter) {
  return () => {
    (async () => {

      try {
        const response = await axios.post("https://6217d5f51a1ba20cba924689.mockapi.io/api/cart", pInfo);
        setCartData((prev) => [...prev, response.data]);
        setCartCounter((prev) => prev + 1);
      }
      catch (e) {
        console.log("Adding to wishlist failed", e);
      }
    })();
  };
}
