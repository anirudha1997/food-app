import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemCard from "./ItemCard";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  const cartValue = cartItems.reduce((total, item) => {
    const itemPrice = item.card.info.price
      ? item.card.info.price / 100
      : item.card.info.defaultPrice / 100;
    return total + itemPrice * item.quantity;
  }, 0);

  if (cartItems.length === 0)
    return (
      <div className="text-center w-8/12 m-auto pb-28">
        <h1 className="text-2xl font-bold my-10">Your cart is empty!</h1>
      </div>
    );
  return (
    <div className="text-center w-8/12 m-auto pb-28">
      <h1 className="text-2xl font-bold my-10">Cart</h1>
      <div className="bg-slate-100 my-3 px-4 py-2 shadow-md">
        {cartItems.map((item) => (
          <ItemCard key={item.card.info.id} itemData={item}></ItemCard>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-green-200 rounded-md font-bold px-3 py-1 mt-3 border border-green-200 curo hover:bg-white"
          onClick={clearCartHandler}
        >
          Clear Cart
        </button>
        <div className="mr-5 text-xl font-bold">
          Total : ₹{cartValue.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default Cart;
