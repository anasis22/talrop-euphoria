import React from "react";
import Cards from "../components/Cards";
import NewArrivals from "../components/NewArrivals";

const ScreenTwo = () => {
  return (
   <div className="w-full flex items-center justify-center flex-col">
    <Cards />
    <NewArrivals />
   </div>
  );
};

export default ScreenTwo;
