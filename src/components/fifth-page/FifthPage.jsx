import React from "react";
import WomenCategories from "../WomenCategories";
import TopBrands from "../TopBrands";

const FifthPage = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col mt-12">
      <div className="flex w-[90%] ">
        <span className="bg-base-color text-base-color rounded-md">1</span>
        <h2 className="ml-4 text-t-color text-3xl font-semibold">
          Categories for Men
        </h2>
      </div>
      <WomenCategories />
      <TopBrands />
    </div>
  );
};

export default FifthPage;
