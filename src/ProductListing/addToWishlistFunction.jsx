import axios from "axios";

export function addToWishlistFunction(wishPage, wishData, pInfo, setIsWishItem, setWishIcon, setWishData, setWishCounter, isWishItem,wishItem) {
  return () => {
    //If wishpage is open if condition will get executed
    if (wishPage) {
      const indexDelete = wishData.findIndex((ele) => ele.id === pInfo.id);
      const newWishListData = wishData.filter((ele, index) => index !== indexDelete);
      (async () => {
        try {
          const response = await axios.delete(`https://6217d5f51a1ba20cba924689.mockapi.io/api/wishlist/${pInfo.id}`);
          if (response.status === 200) {
            setIsWishItem(false);
            setWishIcon("");
            setWishData([...newWishListData]);
            setWishCounter((prev) => prev - 1);
          }
        }
        catch (e) {
          console.log("Adding to wishlist failed", e);
        }
      })();
    }


    //product page functionality for addto wishlist button
    else {
      //If not added to wishlist the item will be added to wishlist. The intial state is false so it get's added to wishlist on first click
      if (!isWishItem) {
        (async () => {
          try {
            const response = await axios.post("https://6217d5f51a1ba20cba924689.mockapi.io/api/wishlist", pInfo);
            setIsWishItem(true);
            setWishData((prev) => [...prev, response.data]);
            setWishIcon("icon-selected");
            setWishCounter((prev) => prev + 1);
          }
          catch (e) {
            console.log("Adding to wishlist failed", e);
          }
        })();
      }


      //If the item is already added to wishlist it will be deleted 
      else {
        (async () => {
          try {
            await axios.delete(`https://6217d5f51a1ba20cba924689.mockapi.io/api/wishlist/${wishItem.id}`);
            setIsWishItem(false);
            setWishIcon("");
            setWishCounter((prev) => prev - 1);
          }
          catch (e) {
            console.log("Adding to wishlist failed", e);
          }
        })();
      }
    }
  };
}
