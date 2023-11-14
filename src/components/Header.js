import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MOBILE_MENU from "../assets/images/mobile-menu-icon.png";
import { useEffect, useState } from "react";

const Header = () => {
  // Subscribing to the store
  const cartItems = useSelector((store) => store.cart.items);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(true);

  const screenResizeHandler = () => {
    if (window.innerWidth < 768) setMobileMenuVisible(false);
    else setMobileMenuVisible(true);
  };

  useEffect(() => {
    window.addEventListener("resize", screenResizeHandler);

    return () => {
      window.removeEventListener("resize", screenResizeHandler);
    };
  }, []);

  return (
    <div
      className={
        "flex justify-between items-center bg-gray-700 shadow-lg fixed top-0 w-full z-20"
      }
      id="header"
    >
      <div className="flex items-center">
        <img src={LOGO_URL} alt="logo" className="w-24 md:w-36 " />
        <p className="text-xl md:text-3xl font-bold pl-5 text-white italic">
          Food on Rails
        </p>
      </div>
      <div className="pr-5 md:hidden">
        <img
          src={MOBILE_MENU}
          alt="mobile menu"
          className="cursor-pointer w-12"
          onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
        />
      </div>
      <div
        className={
          !mobileMenuVisible
            ? "hidden"
            : "absolute md:relative top-[5.5rem] md:top-0 left-2 md:left-auto rounded-md md:rounded-none bg-white md:bg-transparent shadow-md md:shadow-none w-[97%] md:w-fit"
        }
      >
        <ul className="md:flex md:text-white text-xl p-2 md:p-0">
          <li className="px-5 py-3 border-b-[1px] border-b-gray-200 md:border-none">
            <Link
              to="/"
              onClick={() => {
                if (window.innerWidth < 768) setMobileMenuVisible(false);
              }}
            >
              Home
            </Link>
          </li>
          <li className="px-5 py-3 border-b-[1px] border-b-gray-200 md:border-none">
            <Link
              to="/about"
              onClick={() => {
                if (window.innerWidth < 768) setMobileMenuVisible(false);
              }}
            >
              About Us
            </Link>
          </li>
          <li className="px-5 py-3 border-b-[1px] border-b-gray-200 md:border-none">
            <Link
              to="/cart"
              onClick={() => {
                if (window.innerWidth < 768) setMobileMenuVisible(false);
              }}
            >
              Cart 🛒 ({cartItems.length})
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
