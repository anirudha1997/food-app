import RestaurantCard, { withPopularLabel } from "./RestaurantCard";
import { useRef, useEffect, useState } from "react";
import ShimmerCards from "./ShimmerCards";
import { SWIGGY_DAPI, SWIGGY_MAPI } from "../utils/constant";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setfilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterApplied, setFilterApplied] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  const RestaurantCardWithLabel = withPopularLabel(RestaurantCard);

  const filterHandler = () => {
    const filteredList = restaurantList.filter(
      (res) => res.info.totalRatingsString === "10K+"
    );
    setfilteredRestaurantList(filteredList);
    setFilterApplied(true);
  };

  const clearFilterkHandler = () => {
    setfilteredRestaurantList(restaurantList);
    setFilterApplied(false);
    setSearchText("");
  };

  useEffect(() => {
    fetctData();
  }, []);

  const fetctData = async () => {
    try {
      const isMobile = window.innerWidth <= 768;
      const API = isMobile ? SWIGGY_MAPI : SWIGGY_DAPI;
      const data = await fetch(API);
      const json = await data.json();
      setRestaurantList(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setfilteredRestaurantList(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      setFetchError(error);
    }
  };

  if (fetchError)
    return (
      <div className="text-center mt-[20px]">
        <h1 className="text-xl font-bold">
          {"Error fetching data: " + fetchError}
        </h1>
        <h2>
          Check if the CORS extension is enabled. For more details, please check
          the README file.
        </h2>
      </div>
    );

  if (!restaurantList)
    return (
      <h1 className="text-center text-xl mt-5 font-semibold ">
        Could not fetch data 😔. Try refreshing the page.
      </h1>
    );
  if (restaurantList.length === 0) return <ShimmerCards />;

  return (
    <div className="body ">
      <div className="lg:flex lg:items-center lg:justify-center mx-5 mt-10 mb-12">
        <div className="flex items-center flex-auto justify-center lg:justify-start">
          <input
            className="border-solid border-black border py-1 px-2 rounded-md w-2/3"
            data-testid="searchInput"
            type="text"
            placeholder="Search restaurant by name"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="ml-3 bg-slate-900 text-white px-4 py-1.5 rounded-md"
            onClick={() => {
              const searchFilteredList = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurantList(searchFilteredList);
              setFilterApplied(true);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center flex-1 justify-center lg:justify-start mt-5 lg:mt-0">
          <button
            className="px-4 py-1.5 bg-orange-700 text-white rounded-md"
            onClick={filterHandler}
          >
            Most Popular Restaurants
          </button>
          <button
            className={
              "px-4 py-1.5 ml-3 rounded-md " +
              (filterApplied
                ? "bg-slate-800 text-white"
                : "bg-gray-100  text-gray-300")
            }
            disabled={filterApplied ? false : true}
            onClick={clearFilterkHandler}
          >
            Clear Filter
          </button>
        </div>
      </div>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-5">
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
          <div className="text-center col-span-5">
            <h1 className="mx-auto mt-10 text-2xl font-bold min-h-screen">
              No matching results found!
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
