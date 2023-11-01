import RestaurantCard, { withPopularLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import ShimmerCards from "./ShimmerCards";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setfilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { loggedinUser, setUserName } = useContext(UserContext);

  const RestaurantCardWithLabel = withPopularLabel(RestaurantCard);

  const clickHandler = () => {
    const filteredList = restaurantList.filter(
      (res) => res.info.avgRating > 4.5
    );
    console.log(filteredList);
    setfilteredRestaurantList(filteredList);
  };

  useEffect(() => {
    fetctData();
  }, []);

  const fetctData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setRestaurantList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurantList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) return <h1>Looks like you are offline!</h1>;

  if (restaurantList.length === 0) return <ShimmerCards />;

  return (
    <div className="body">
      <div className="flex items-center justify-center mx-5 mt-10 mb-5">
        <input
          className="border-solid border-black border py-1 px-2 rounded-md"
          data-testid="searchInput"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="ml-3 mr-8 bg-slate-900 text-white px-4 py-1.5 rounded-md"
          onClick={() => {
            const searchFilteredList = restaurantList.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilteredRestaurantList(searchFilteredList);
          }}
        >
          Search
        </button>
        <button
          className="px-4 py-1.5 bg-orange-700 text-white rounded-md"
          onClick={clickHandler}
        >
          Top Rated Restaurants
        </button>
        <label className="ml-10 mr-2">User : </label>
        <input
          className="border border-black py-1 px-2 rounded-md"
          value={loggedinUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        ></input>
      </div>
      <div className="flex items-center flex-wrap">
        {filteredRestaurantList.length > 0 ? (
          filteredRestaurantList.map((restaurant) => {
            return restaurant.info.totalRatingsString === "10K+" ? (
              <RestaurantCardWithLabel
                key={restaurant?.info?.id}
                resData={restaurant?.info}
              />
            ) : (
              <RestaurantCard
                key={restaurant?.info?.id}
                resData={restaurant?.info}
              />
            );
          })
        ) : (
          <h1 className="mx-auto mt-10 text-2xl font-bold">
            No matching results found!
          </h1>
        )}
      </div>
    </div>
  );
};

export default Body;
