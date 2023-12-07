import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  removeItem,
  setShowToast,
  updateQuantity,
} from "../utils/cartSlice";
import { CDN_URL, NO_IMAGE } from "../utils/constant";
import ToastMessage from "./ToastMessage";

const ItemCard = (props) => {
  const { itemData } = props;
  const { name, price, description, imageId, defaultPrice } =
    itemData.card.info;
  const showToast = useSelector((store) => store.cart.showToast);
  const cartItems = useSelector((store) => store.cart.items);
  const currentItemData = cartItems.filter(
    (item) => item.card.info.id === itemData.card.info.id
  );
  const currentItemQuantity = currentItemData[0]?.quantity
    ? currentItemData[0]?.quantity
    : 0;
  const dispatch = useDispatch();

  let timer;
  const clickHandler = (cardAction) => {
    clearTimeout(timer);
    if (cardAction === "Add") {
      const newItemData = { ...itemData, quantity: 1 };
      dispatch(addItem(newItemData));
      dispatch(setShowToast({ show: true, message: "Added to Cart" }));
    } else {
      dispatch(removeItem(itemData));
      dispatch(setShowToast({ show: true, message: "Removed from Cart" }));
    }
    timer = setTimeout(() => {
      dispatch(setShowToast({ show: false, message: "" }));
    }, 1500);
  };

  const increaseQuantity = () => {
    dispatch(
      updateQuantity({
        id: itemData.card.info.id,
        quantity: currentItemQuantity + 1,
      })
    );
  };

  const decreaseQuantity = () => {
    if (currentItemQuantity - 1 === 0) {
      clickHandler("Remove");
    } else {
      dispatch(
        updateQuantity({
          id: itemData.card.info.id,
          quantity: currentItemQuantity - 1,
        })
      );
    }
  };

  return (
    <>
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
          {currentItemQuantity <= 0 && (
            <button
              className="bg-green-200 rounded-md font-bold px-3 py-1 mt-3 border border-green-200  hover:bg-white"
              onClick={() => {
                clickHandler("Add");
              }}
            >
              Add to Cart
            </button>
          )}
          {currentItemQuantity !== 0 && (
            <div className="flex items-center mt-3">
              <button
                className="bg-green-200 font-bold px-3 py-1  border border-green-200 rounded-md hover:bg-white"
                onClick={() => {
                  decreaseQuantity();
                }}
              >
                -
              </button>
              <p className="mx-2">{currentItemQuantity}</p>
              <button
                className="bg-green-200 font-bold px-3 py-1  border border-green-200 rounded-md hover:bg-white"
                onClick={() => {
                  increaseQuantity();
                }}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
      {showToast.show && <ToastMessage message={showToast.message} />}
    </>
  );
};

export default ItemCard;
