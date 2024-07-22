import React from "react";
import WishList from "../assets/icons/wishlist.svg"
import Account from "../assets/icons/account.svg"
import Cart from "../assets/icons/cart.svg"
import MenuClose from "../assets/icons/menuClose.png"
import { useData } from "../../contexts/DataContexts";

const Menu = () => {
    const {menuOpen,openingAndCloseMenu} = useData()
  return (
    <div className={`w-[16%] h-full p-4 bg-white flex items-center justify-start pt-12 flex-col absolute z-10 -right-60 transition-all
    xsm:w-36
    sm:w-44
    ${menuOpen && 'right-0'}`}>

      <button className="absolute top-2 left-4" onClick={openingAndCloseMenu}>
        <img className="w-5" src={MenuClose} alt="close" />
      </button>

      <ul className="w-[70%] flex items-center justify-around">
        <li>
          <button className="bg-[#F6F6F6] p-2 rounded-md">
            <img className="
            " src={WishList} alt="wishlist" />
          </button>
        </li>

        <li>
          <button className="bg-[#F6F6F6] p-2 rounded-md">
            <img className="
            " src={Account} alt="account" />
          </button>
        </li>

        <li>
          <button className="bg-[#F6F6F6] p-2 rounded-md">
            <img className="
            " src={Cart} alt="cart" />
          </button>
        </li>
      </ul>

      <ul className="w-full mt-4 text-center">
        <li className="text-[#807D7E] hover:text-[#3C4242] transition-all cursor-pointer p-3">
          Shop
        </li>
        <li className="text-[#807D7E] hover:text-[#3C4242] transition-all cursor-pointer p-3">
          Men
        </li>
        <li className="text-[#807D7E] hover:text-[#3C4242] transition-all cursor-pointer p-3">
          Women
        </li>
        <li className="text-[#807D7E] hover:text-[#3C4242] transition-all cursor-pointer p-3">
          Combos
        </li>
        <li className="text-[#807D7E] hover:text-[#3C4242] transition-all cursor-pointer p-3">
          Joggers
        </li>
      </ul>
    </div>
  );
};

export default Menu;
