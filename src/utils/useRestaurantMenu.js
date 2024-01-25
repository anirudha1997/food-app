import { useEffect, useState } from "react";
import { SWIGGY_MENU_API } from "./constant";

const useRestaurantMenu = (resId) => {
  const [resData, setResData] = useState([]);
  const isMobile = window.innerWidth <= 768;
  const API = SWIGGY_MENU_API;
  const fetch_url = API + resId;
  const fetchRestaurantData = async () => {
    try {
      const data = await fetch(fetch_url);
      const json = await data.json();
      console.log("Menu Data:", json.data);
      setResData(json.data);
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  return resData;
};

export default useRestaurantMenu;
