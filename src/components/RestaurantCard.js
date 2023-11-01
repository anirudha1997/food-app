import { CDN_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, id } = resData;
  return (
    <div
      className="m-4 p-4 w-[260px] h-[440px] cursor-pointer rounded-lg bg-gray-100 relative hover:bg-gray-200"
      data-testid="resCard"
    >
      <div className="h-full">
        <img
          className="rounded-lg object-cover"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4 className="py-3">{avgRating} stars</h4>
        <Link to={"/restaurants/" + id} key={id}>
          <div className="absolute top-0 left-0 w-full h-full"></div>
        </Link>
      </div>
    </div>
  );
};

export const withPopularLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-5 left-5 bg-red-800 text-white z-10 rounded-lg px-3 py-1 font-bold">
          Most Popular
        </label>
        <RestaurantCard {...props}></RestaurantCard>
      </div>
    );
  };
};

export default RestaurantCard;
