import React from "react";
import { useData } from "../../contexts/DataContexts";
import { useNavigate } from "react-router-dom";
import right from "/assets/icons/arrow-right.svg";

const WomenCategories = () => {
  const { data, setSelectedProducts } = useData();
  const navigate = useNavigate();

  const handleImageClick = (product) => {
    setSelectedProducts(product);
    navigate("/product-details-page");
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
        if (el.heading === "Categories for Women") {
          return (
            <div key={el.id} className="cursor-pointer" onClick={() => handleImageClick(el)}>
              <img
                src={el.img}
                alt={el.title}
                
              />
              <div className="w-full mt-4">
                <div className="w-full  flex items-center justify-between">
                  <p className="text-t-color text-sm font-semibold">
                    {el.title}
                  </p>
                  <img className="w-3.5" src={right} alt="right" />
                </div>
                <p className="text-xs text-[#7F7F7F] mt-2">Explore now!</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default WomenCategories;

