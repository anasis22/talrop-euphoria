import React from "react";
import Logo from "/assets/icons/Logo.svg";
import Search from "/assets/icons/search.svg";
import WishList from "/assets/icons/wishlist.svg";
import Account from "/assets/icons/account.svg";
import Cart from "/assets/icons/cart.svg";
import MenuIcon from "/assets/icons/menuIcon.png";
import { useData } from "../../contexts/DataContexts";

const Navbar = () => {
  const { menuOpen, openingAndCloseMenu } = useData();

  return (
    <div className="w-[90%] flex justify-between items-center p-4">
      <img
        className="
      xsm:w-14
      sm:w-24"
        src={Logo}
        alt="logo"
      />
      <ul
        className="gap-10
      xsm:hidden
      sm:hidden
      md:hidden
      lg:hidden
      xl:flex"
      >
        <li className="text-[#807D7E] hover:text-[#3C4242] transition-all cursor-pointer">
          Shop
        </li>
        <li className="text-[#807D7E] hover:text-[#3C4242] transition-all cursor-pointer">
          Men
        </li>
        <li className="text-[#807D7E] hover:text-[#3C4242] transition-all cursor-pointer">
          Women
        </li>
        <li className="text-[#807D7E] hover:text-[#3C4242] transition-all cursor-pointer">
          Combos
        </li>
        <li className="text-[#807D7E] hover:text-[#3C4242] transition-all cursor-pointer">
          Joggers
        </li>
      </ul>

      <div
        className="w-1/5 relative
      xsm:w-2/4
      sm:w-2/4
      md:w-3/5
      lg:w-2/4
      xl:w-2/5"
      >
        <input
          className="w-full placeholder:text-sm rounded-sm p-0.5 pl-8 outline-none bg-[#F6F6F6] border-none"
          type="text"
          placeholder="Search"
        />
        <img className="w-3 absolute top-2 left-2" src={Search} alt="search" />
      </div>

      <button onClick={openingAndCloseMenu}>
        <img
          className="w-6
        xsm:block
        sm:block
        md:block
        lg:block
        xl:hidden
        "
          src={MenuIcon}
          alt="menu"
        />
      </button>

      <ul
        className="gap-4
      xsm:hidden
      sm:hidden
      md:hidden
      lg:hidden
      xl:flex"
      >
        <li>
          <button className="bg-[#F6F6F6] p-2 rounded-md">
            <img src={WishList} alt="wishlist" />
          </button>
        </li>

        <li>
          <button className="bg-[#F6F6F6] p-2 rounded-md">
            <img src={Account} alt="account" />
          </button>
        </li>

        <li>
          <button className="bg-[#F6F6F6] p-2 rounded-md">
            <img src={Cart} alt="cart" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
