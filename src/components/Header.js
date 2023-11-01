import { LOGO_URL } from "../utils/constant";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedinUser } = useContext(UserContext);

  // Subscribing to the store
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between items-center bg-gray-700 shadow-lg">
      <img src={LOGO_URL} alt="logo" className="w-36" />
      <div>
        <ul className="flex text-white text-xl">
          <li className="px-5">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-5">
            <Link to="/">Home</Link>
          </li>
          <li className="px-5">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-5">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-5">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-5">
            <Link to="/cart">Cart 🛒 ({cartItems.length})</Link>
          </li>
          <button
            className="px-5"
            onClick={() => {
              return btnText === "Login"
                ? setBtnText("Logout")
                : setBtnText("Login");
            }}
          >
            {btnText}
          </button>
          <li className="px-5">👨 {loggedinUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
