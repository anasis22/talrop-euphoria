import React, { useState } from "react";
import { useData } from "../../contexts/DataContexts";
import RightArrow from "../assets/icons/right-arrow-light.svg";
import star from "../assets/icons/star.svg";
import right from "../assets/icons/arrow-right.svg";
import cart from "../assets/icons/cart-1.svg"
import creditCard from "../assets/icons/credit card.svg"
import truck from "../assets/icons/truck.svg"
import freeReturn from "../assets/icons/Free-Shipping&Returns.svg"
import sizeAndFit from "../assets/icons/Size&Fit.svg"

const PpriceAndDetails = () => {
  const { selectedProducts } = useData();
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleColorChange = (index) => {
    setSelectedColor(index);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
};

  const colors = [
    { bgColor: "#3C4242" },
    { bgColor: "#EDD146" },
    { bgColor: "#EB84B0" },
    { bgColor: "#9C1F35" },
  ];

  const sizes = ['XS', 'S', 'M', 'L'];

  return (
    <div className="ml-12">
      <div className="flex mt-4">
        <p className="text-[#807D7E] text-sm">Shop</p>
        <img className="w-1 mt-1 ml-4" src={RightArrow} alt="right" />
      </div>

      <h1 className="text-2xl mt-4">{selectedProducts.title}</h1>

      <div className="flex mt-4">
        <img className="w-4" src={star} alt="star" />
        <img className="w-4 ml-2" src={star} alt="star" />
        <img className="w-4 ml-2" src={star} alt="star" />
        <img className="w-4 ml-2" src={star} alt="star" />
        <img className="w-4 ml-2" src={star} alt="star" />
        <p className="ml-2 text-[#807D7E] text-sm">{selectedProducts.ratings}</p>
      </div>

      <div className="flex mt-4">
        <p className="text-xs text-[#3F4646]">Select Size</p>
        <p className="ml-3 text-xs text-[#3F4646]">Size Guide</p>
        <img className="w-3 ml-3" src={right} alt="right" />
      </div>

      <div className="mt-4">
                {sizes.map((size) => (
                    <button
                        key={size}
                        className={`border ml-3 pl-2 pr-2 pb-1 pt-1 rounded-md text-xs ${selectedSize === size ? 'bg-black text-white' : 'border-[#BEBCBD] text-[#3C4242]'}`}
                        onClick={() => handleSizeChange(size)}
                    >
                        {size}
                    </button>
                ))}
            </div>

      <div className="mt-3">
        <p className="text-sm text-[#3F4646]">Colours Available</p>
        <ul className="w-32 mt-2 flex items-center justify-between">
          {colors.map((color, index) => (
            <li
              key={index}
              className={`w-[20%] ${
                selectedColor === index ? "border rounded-2xl text-center" : ""
              }`}
            >
              <span
                className="pr-1.5 pl-1.5 rounded-xl cursor-pointer"
                style={{ backgroundColor: color.bgColor, color: color.bgColor }}
                onClick={() => handleColorChange(index)}
              >
                1
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4 mt-4">
        <button className="flex bg-base-color p-1.5 pr-8 pl-8 rounded-md">
             <img className="mt-0.5 w-4" src={cart} alt="cart" />
             <p className="ml-2 text-sm text-white">Add to cart</p>
        </button>
        <button className="p-1.5 pr-8 pl-8 border-black border rounded-md">
             <p className="text-sm text-black">{selectedProducts.price}</p>
        </button>
      </div>

      <hr className="border-slate-400lack border-[.5px] w-full mt-4" />

      <div className="flex mt-5">
        <ul>
            <li className="flex">
                <a className="p-2 bg-[#F6F6F6] rounded-xl">
                    <img className="w-3" src={creditCard} alt="creditcard" />
                </a>
                <p className="text-[#3C4242] ml-3 text-sm mt-1">Secure payment</p>
            </li>
            <li className="flex mt-4">
                <a className="p-2 bg-[#F6F6F6] rounded-xl">
                    <img className="w-3" src={truck} alt="creditcard" />
                </a>
                <p className="text-[#3C4242] ml-3 text-sm mt-1">Free shipping</p>
            </li>
        </ul>
        <ul className="ml-5">
            <li className="flex">
                <a className="p-2 bg-[#F6F6F6] rounded-xl">
                    <img className="w-3" src={sizeAndFit} alt="creditcard" />
                </a>
                <p className="text-[#3C4242] ml-3 text-sm mt-1">Size & Fit</p>
            </li>
            <li className="flex mt-4">
                <a className="p-2 bg-[#F6F6F6] rounded-xl">
                    <img className="w-3" src={freeReturn} alt="creditcard" />
                </a>
                <p className="text-[#3C4242] ml-3 text-sm mt-1">Free Shipping & Returns</p>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default PpriceAndDetails;
