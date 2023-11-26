import { useEffect, useState } from "react";
import { SWIGGY_MENU_DAPI, SWIGGY_MENU_MAPI } from "./constant";

const useRestaurantMenu = (resId) => {
  const [resData, setResData] = useState([]);
  const isMobile = window.innerWidth <= 768;
  const API = isMobile ? SWIGGY_MENU_MAPI : SWIGGY_MENU_DAPI;
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
