import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ShimmerCards from "./ShimmerCards";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const resData = useRestaurantMenu(resId);
  console.log("Data:", resData);
  if (resData.length === 0) return <ShimmerCards />;

  const { name, cuisines, costForTwoMessage } =
    resData?.cards[0]?.card?.card?.info;

  const categories =
    resData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("items:", categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg mb-10">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((cat, index) => (
        <RestaurantCategory
          key={cat.card.card.title}
          categoryData={cat}
          showItemsInList={index === showIndex ? true : false}
          setIndex={() => {
            if (showIndex === index) setShowIndex(null);
            else setShowIndex(index);
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
