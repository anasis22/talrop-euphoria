import React, { useState } from "react";
import { useData } from "../../contexts/DataContexts";
import { useNavigate } from "react-router-dom";
import wishList from "/assets/icons/wishlist.svg";
import heart from "/assets/icons/heart.jpg";

const InTheLimeLight = () => {
  const { data, setSelectedProducts } = useData();
  const [wishListStatus, setWishListStatus] = useState({})
  const navigate = useNavigate();

  const handleImageClick = (product) => {
    setSelectedProducts(product);
    navigate("/product-details-page");
  };

  const handleWishListToggle = (event, productId) => {
    event.stopPropagation(); // Prevent the click event from bubbling up to the parent div
    setWishListStatus(prevStatus => ({
      ...prevStatus,
      [productId]: !prevStatus[productId]
    }));
  };

  return (
    <div
      className="flex items-center justify-center flex-col gap-24 mt-8
    xsm:flex-col xsm:gap-12
    sm:flex-row sm:flex-wrap
    md:flex-row md:flex-wrap
    lg:flex-row lg:flex-wrap"
    >
      {data.map((el) => {
        if (el.heading === "In The Limelight") {

          return (
            <div
              key={el.id}
              className="cursor-pointer relative"
              onClick={() => handleImageClick(el)}
            >
              <img src={el.img} alt={el.title} />
              <div className="w-full mt-4">
                <div className="w-full  flex items-center justify-between">
                  <p className="text-t-color text-sm font-semibold">
                    {el.title}
                  </p>
                  <button className="bg-[#F6F6F6] text-[#3C4242] text-[12px] pr-3 pl-3 pt-1 pb-1 rounded-sm">
                    {el.price}
                  </button>
                </div>
                <p className="text-xs text-[#7F7F7F] mt-2">{el.brand}</p>
              </div>
              <a className="bg-[#FFFFFF] absolute top-5 right-6 p-1.5 rounded-2xl z-10" onClick={(event) => handleWishListToggle(event, el.id)} >
                <img src={wishListStatus[el.id] ? heart : wishList} alt="heart" />
              </a>
            </div>
          );
        }
      })}
    </div>
  );
};

export default InTheLimeLight;