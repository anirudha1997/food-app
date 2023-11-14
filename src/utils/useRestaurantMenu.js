import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resData, setResData] = useState([]);

  const fetch_url =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
    resId;

  const fetchRestaurantData = async () => {
    try {
      const data = await fetch(fetch_url);
      const json = await data.json();
      setResData(json.data);
    } catch (error) {
      console.log("Error: " + error);
      console.log(
        "Check if CORS extension is enabled. For more details check the README file."
      );
    }
  };

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  return resData;
};

export default useRestaurantMenu;
