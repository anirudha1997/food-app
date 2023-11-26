import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { CDN_URL, NO_IMAGE } from "../utils/constant";

const ItemCard = (props) => {
  const { itemData, cardLocation } = props;
  const { name, price, description, imageId, defaultPrice } =
    itemData.card.info;

  const dispatch = useDispatch();

  let action;
  if (cardLocation === "Menu") {
    action = "Add";
  } else {
    action = "Remove";
  }

  const clickHandler = (currentItem, cardAction) => {
    if (cardAction === "Add") dispatch(addItem(currentItem));
    else dispatch(removeItem(currentItem));
  };

  return (
    <div
      className="bg-white mb-3 p-4 md:flex items-center justify-between"
      data-testid="itemCard"
    >
      <img
        src={imageId ? CDN_URL + imageId : NO_IMAGE}
        className="w-full md:w-2/12"
      ></img>
      <div className="w-full md:w-10/12 md:pl-4 text-left">
        <div className="md:flex items-center justify-between py-3 md:py-0">
          <h4 className="font-bold md:text-xl">{name}</h4>
          <div className="font-bold md:text-xl pt-2 md:pt-0">
            ₹{price ? price / 100 : defaultPrice / 100}
          </div>
        </div>
        <p className="text-left text-sm md:text-base">{description}</p>
        <button
          className="bg-green-200 rounded-md font-bold px-3 py-1 mt-3 border border-green-200 curo hover:bg-white"
          onClick={() => {
            clickHandler(itemData, action);
          }}
        >
          {action === "Add" ? "Add to Cart" : "Remove"}
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
